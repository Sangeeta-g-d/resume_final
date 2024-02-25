from django.db import models

# Create your models here.

class Templates(models.Model):
   
    template = models.FileField(upload_to='shared_template_folder/',default="template")
    plain_template = models.FileField(upload_to='shared_template_folder/',default="plain template")


# Create your models here.
class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploads/')
    email = models.CharField(max_length=100)

class ExtractedEmail(models.Model):
    email = models.CharField(max_length=100)
    uploaded_file = models.ForeignKey(UploadedFile, on_delete=models.CASCADE)

class Ectracted_Resume_Details(models.Model):
    UploadedFile_id=models.ForeignKey(UploadedFile, on_delete=models.CASCADE)
    first_name= models.CharField(max_length=100,default="first_name")
    middle_name=models.CharField(max_length=100,default="middle_name")
    last_name=models.CharField(max_length=100,default="last_name")
    skills=models.CharField(max_length=500,default="skills")
    internships=models.CharField(max_length=9000,default="internships")
    experience=models.CharField(max_length=9000,default="exp")
    education=models.CharField(max_length=3000,default="education")
    langauges=models.CharField(max_length=2000,default="English")
    projects=models.CharField(max_length=9000,default="project")
    phone_number=models.CharField(max_length=100,default="123")
    email= models.CharField(max_length=100,default="email")
