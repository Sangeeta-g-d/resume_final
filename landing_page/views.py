from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseForbidden,HttpResponseBadRequest
from django.template import loader
from django.contrib.auth import authenticate,login,logout
from .models import Templates, UploadedFile
import PyPDF2
import re
import json

# Create your views here.


def index(request):
    return render(request,'index.html')

def team(request):
    data=Templates.objects.all()
    context={'data':data}
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

        return redirect('index')  # Redirect to a success page
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