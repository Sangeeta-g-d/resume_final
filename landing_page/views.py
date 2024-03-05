from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseForbidden,HttpResponseBadRequest, JsonResponse
from django.template import loader
from django.contrib.auth import authenticate,login,logout
import pdfplumber
from .models import  Templates
import PyPDF2
import re
from PIL import Image
import pytesseract
from django.views.decorators.csrf import csrf_exempt
import json
from django.urls import reverse
import tempfile
from django.shortcuts import get_object_or_404
from google.cloud import language_v1
from google.auth import credentials
from google.cloud import language_v1
from google.oauth2 import service_account
import os
import openai
import cv2
import pytesseract
#
# import generativeai
#from generativeai import GenAIConfig, GenAI

import openai
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
# Create your views here.

"""def get_and_use_gemini_api(prompt):
    
    Retrieves Gemini API key from environment variable, creates a GenAI client,
    and uses it to generate text based on the provided prompt.

    Args:
        prompt (str): The prompt for text generation.

    Returns:
        str: The generated text response from the Gemini API.

    Raises:
        ValueError: If the GEMINI_API_KEY environment variable is missing.
 

    # Access environment variable
    api_key = os.environ.get("GEMINI_API_KEY")

    # Check if API key exists
    if not api_key:
        raise ValueError("Missing GEMINI_API_KEY environment variable.")

    # Configure and create GenAI instance
    config = GenAIConfig(api_key=api_key)
    client = GenAI(config)

    # Use the client to generate text
    response = client.generate_text(prompt=prompt)
    print(response.text)
    # Process and return the response
    return response.text   """

def index(request):
    #prompt = "Write a story about a robot who falls in love with a human."
    #generated_text = get_and_use_gemini_api(prompt)
    #print(generated_text)
    return render(request,'index.html')

def team(request):
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

def resume(request, id):
    print("iiiiiiiiiiiiiiiiiiiiiii",id)
    
     # Pass the extracted coordinates or any other relevant data to the template
    context = {'id':id}  # Modify this context as per your requirements

    # Render the template with the context
    return render(request, 'resume.html', context)

@csrf_exempt  # Disable CSRF for demonstration purposes. Implement CSRF properly in a production environment.
def update_image(request, id):
    if request.method == 'POST':
        data = Templates.objects.get(id=id)
        plain_temp_path = data.plain_template.path

        # Get coordinates for Name
        name_coordinates = get_coordinates(plain_temp_path, "Name")

        # Get the entered value from the POST request
        entered_value = request.POST.get('entered_value', '')

        # Update the image with the entered value at the correct coordinates
        updated_image_path = update_image_with_value(plain_temp_path, name_coordinates, entered_value)

        # Save the updated image to the model
        with open(updated_image_path, 'rb') as updated_image_file:
            data.plain_template.save('updated_image.png', File(updated_image_file))

        # Return a success response
        return JsonResponse({'success': True})

    return JsonResponse({'error': 'Invalid request method'})

def get_coordinates(image_path, keyword):
    # Open the image
    img = Image.open(image_path)

    # Perform OCR on the image
    text = pytesseract.image_to_string(img)

    # Find the position of the keyword in the text
    start_index = text.find(keyword)
    
    if start_index != -1:
        # If the keyword is found, get the bounding box (x, y, width, height)
        x, y, _, _ = img.getbbox()
        x += start_index * 10  # Adjust this value based on your font size and spacing
        return x, y
    else:
        return None



openai.api_key = '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'

def generate_enhanced_content(form_data):
    print('kkkkkkkkkkkkk')
    # Format the input data for the OpenAI API request
    input_text = f"First Name: {form_data['first_name']}\n"
    input_text += f"Last Name: {form_data['last_name']}\n"
    input_text += f"Email: {form_data['email']}\n"
    input_text += f"Phone Number: {form_data['phone_number']}\n"
    input_text += f"Experience: {form_data['experience']}\n"
    input_text += f"Projects: {form_data['projects']}\n"
    input_text += f"Education: {form_data['education']}\n"
    input_text += f"Internships: {form_data['internships']}\n"
    input_text += f"Languages: {form_data['languages']}\n"

    # Call the OpenAI API to generate enhanced content
    response = openai.Completion.create(
    engine="gpt-3.5-turbo-instruct",  # Choose an appropriate engine
    prompt=input_text,
    max_tokens=150
)

    print('response',response)
    # Extract and return the enhanced content from the API response
    return response.choices[0].text.strip()

def generate_content(request):
    print("hiiiiiiiiiiiii")
    if request.method == 'POST':
        # Extract data from the submitted form
        form_data = {
            'first_name': request.POST.get('first_name', ''),
            'last_name': request.POST.get('last_name', ''),
            'email': request.POST.get('email', ''),
            'phone_number': request.POST.get('phone_number', ''),
            'experience': request.POST.get('experience', ''),
            'projects': request.POST.get('projects', ''),
            'education': request.POST.get('education', ''),
            'internships': request.POST.get('internships', ''),
            'languages': request.POST.get('languages', '')
        }
        print("hloooo")
        # Generate enhanced content using OpenAI API
        enhanced_content = generate_enhanced_content(form_data)
        print("enhanced_content",enhanced_content)
        # Render a separate template to display the enhanced content
        #return render(request, 'enhanced_content.html', {'enhanced_content': enhanced_content})

        # Generate resume content using the form data
        resume_content = generate_resume_content(form_data)

        # Save the generated content to the right-side image file (you need to implement this)
        # For example, you can write the content to a text file and render it as an image in the template

        # Update context with generated content
        context = { 'resume_content': resume_content}
        return HttpResponse("successfull")

def generate_resume_content(data):
    # Explicitly provide credentials
    credentials = service_account.Credentials.from_service_account_file('/home/user/my_project/service-account-file.json')


    # Initialize the Natural Language API client with the provided credentials
    client = language_v1.LanguageServiceClient(credentials=credentials)

    # Define the text to be analyzed (you can customize this based on your form data)
    text = f"""
    Name: {data['first_name']} {data['last_name']}
    Email: {data['email']}
    Phone Number: {data['phone_number']}
    Experience: {data['experience']}
    Projects: {data['projects']}
    Education: {data['education']}
    Internships: {data['internships']}
    Languages: {data['languages']}
    """

    # Analyze the text using the Natural Language API
    document = {"content": text, "type_": language_v1.Document.Type.PLAIN_TEXT}
    response = client.analyze_entities(request={'document': document})
    
    # Extract entities or perform other analysis as needed
    # For simplicity, let's assume we just want to extract entities
    entities = [entity.name for entity in response.entities]

    # Generate resume content based on the analysis (you can customize this)
    resume_content = f"""
    Name: {data['first_name']} {data['last_name']}
    Email: {data['email']}
    Phone Number: {data['phone_number']}
    Relevant Skills: {', '.join(entities)}
    """

    return resume_content

'''openai.api_key = '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'

def generate_enhanced_content(form_data):
    print('kkkkkkkkkkkkkkkkk')
    # Format the input data for the OpenAI API request
    input_text = f"First Name: {form_data['first_name']}\n"
    input_text += f"Last Name: {form_data['last_name']}\n"
    input_text += f"Email: {form_data['email']}\n"
    input_text += f"Phone Number: {form_data['phone_number']}\n"
    input_text += f"Experience: {form_data['experience']}\n"
    input_text += f"Projects: {form_data['projects']}\n"
    input_text += f"Education: {form_data['education']}\n"
    input_text += f"Internships: {form_data['internships']}\n"
    input_text += f"Languages: {form_data['languages']}\n"

    # Call the OpenAI API to generate enhanced content
    response = openai.Completion.create(
    engine="gpt-3.5-turbo-instruct",  # Choose an appropriate engine
    prompt=input_text,
    max_tokens=150
)

    print('response',response)
    # Extract and return the enhanced content from the API response
    return response.choices[0].text.strip()


def generate_content(request):
    print("hiiiiiiiiiiiii")
    if request.method == 'POST':
        # Extract data from the submitted form
        form_data = {
            'first_name': request.POST.get('first_name', ''),
            'last_name': request.POST.get('last_name', ''),
            'email': request.POST.get('email', ''),
            'phone_number': request.POST.get('phone_number', ''),
            'experience': request.POST.get('experience', ''),
            'projects': request.POST.get('projects', ''),
            'education': request.POST.get('education', ''),
            'internships': request.POST.get('internships', ''),
            'languages': request.POST.get('languages', '')
        }
        print("hloooo")
        # Generate enhanced content using OpenAI API
        enhanced_content = generate_enhanced_content(form_data)
        print("enhanced_content",enhanced_content)
        # Render a separate template to display the enhanced content
        #return render(request, 'enhanced_content.html', {'enhanced_content': enhanced_content})

    else:
        # Handle GET requests (if needed)
        return HttpResponse("Method Not Allowed", status=405)
    else:
        # Handle GET requests (if needed)
        return HttpResponse("Method Not Allowed", status=405)'''
