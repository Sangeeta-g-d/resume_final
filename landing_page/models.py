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