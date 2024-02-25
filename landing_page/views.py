from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseForbidden,HttpResponseBadRequest
from django.template import loader
from django.contrib.auth import authenticate,login,logout
import pdfplumber
from .models import Ectracted_Resume_Details, Templates, UploadedFile
import PyPDF2
import re
import json
from django.urls import reverse
import tempfile
from django.shortcuts import get_object_or_404

# Create your views here.


def index(request):
    return render(request,'index.html')

def team(request,id):
    data=Templates.objects.all()
    context={'data':data,'u_id':id}
    return render(request,'team.html',context)

def admin_login(request):
    if request.method == 'POST':
        print("hiiiiiiiiiiii")
        username = request.POST.get('username')
        print(username)
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_superuser:
            print("yessssss")
            login(request, user)
            print("useaaaaaaaaa",user)
            print(request.user)
            return redirect('/admin_db')
        else:
            
            return redirect('/admin_login')
    return render(request,'admin_login.html')


def admin_db(request):
    if request.method == 'POST':
        print("hiiiiiiiiiiii")
        template = request.FILES.get('template')
        plain_template = request.FILES.get('plain_template')
        obj = Templates.objects.create(template=template,plain_template=plain_template)
        return redirect('/admin_db')

    return render(request,'admin_db.html')

def admin_logout(request):
    logout(request)
    # Redirect to a specific page after logout (optional)
    return redirect('/admin_login')


def upload_file(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['pdf_file']
        # Save the uploaded file to the database
        uploaded_file_obj = UploadedFile.objects.create(file=uploaded_file)
        # Extract emails from the PDF file
        extracted_emails = extract_emails_from_pdf(uploaded_file_obj.file.path)
        # Serialize the uploaded file and extracted emails as JSON
        data_to_save = {     
            'emails': extracted_emails
        }
        print(data_to_save)
        extracted_email = data_to_save['emails'][0]
        print(extracted_email)
        serialized_data = json.dumps(extracted_email)
        # Save the serialized data in the database
        uploaded_file_obj.email = serialized_data
        uploaded_file_obj.save()
        id=uploaded_file_obj.id
        print("iddddddddddddddddd",id)
        return redirect(reverse('team', kwargs={'id': id}))
  # Redirect to a success page
    #return render(request, 'upload.html')

def extract_emails_from_pdf(file_path):
    emails = []
    with open(file_path, 'rb') as f:
        pdf_reader = PyPDF2.PdfReader(f)

        for page_num in range(len(pdf_reader.pages)):

            page = pdf_reader.pages[page_num]

            text = page.extract_text()

            # Use regular expressions to find email addresses
            email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
            emails += re.findall(email_pattern, text)
    return emails


def resume(request, id, u_id):
    data = get_object_or_404(Templates, id=id)
    details = get_object_or_404(UploadedFile, id=u_id)

    # Check if details already exist
    existing_details = Ectracted_Resume_Details.objects.filter(UploadedFile_id=details)
    if existing_details.exists():
        # If details already exist, retrieve them and return the template
        extracted_data = existing_details.first()
        context = {'data': data, 'extracted_data': extracted_data}
        return render(request, 'resume.html', context)
    else:
        if details.file.name.endswith('.pdf'):
            with details.file.open('rb') as pdf_file:
                pdf = pdfplumber.open(pdf_file)
                text = ""
                for page in pdf.pages:
                    text += page.extract_text()

            # Extracting information using regular expressions
            name_match = re.search(r'([A-Za-z]+) ([A-Za-z]+)', text)
            phone_match = re.search(r'\b\d{10}\b', text)
            email_match = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
            experience_match = re.search(r'EXPERIENCE(?=.*?EDUCATION)(.*?)(?=EDUCATION|$)', text, re.DOTALL)
            education_match = re.search(r'EDUCATION(?=.*?LANGUAGES)(.*?)(?=LANGUAGES|$)', text, re.DOTALL)
            internships_match = re.search(r'INTERNSHIP(?=.*?EXPERIENCE)(.*?)(?=EXPERIENCE|$)', text, re.DOTALL)
            projects_match = re.search(r'PROJECTS(?=.*?LANGUAGES)(.*?)(?=LANGUAGES|$)', text, re.DOTALL)
            languages_match = re.search(r'LANGUAGES(?=.*?DECLARATION)(.*?)(?=DECLARATION|$)', text, re.DOTALL)

            # Extracted information
            first_name = name_match.group(1) if name_match else ""
            last_name = name_match.group(2) if name_match else ""
            phone_number = phone_match.group() if phone_match else ""
            email = email_match.group() if email_match else ""
            experience = experience_match.group() if experience_match else ""
            education = education_match.group() if education_match else ""
            internships = internships_match.group() if internships_match else ""
            projects = projects_match.group() if projects_match else ""
            languages = languages_match.group() if languages_match else ""

            # Saving to the database
            extracted_data = Ectracted_Resume_Details.objects.create(
                UploadedFile_id=details,
                first_name=first_name,
                last_name=last_name,
                phone_number=phone_number,
                email=email,
                experience=experience,
                education=education,
                internships=internships,
                projects=projects,
                langauges=languages
            )

            context = {'data': data, 'extracted_data': extracted_data}
            return render(request, 'resume.html', context)
        else:
            error_message = "The file is not a PDF."
            return HttpResponse(error_message)