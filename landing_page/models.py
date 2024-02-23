from django.db import models

# Create your models here.


class Templates(models.Model):
   
    template = models.FileField(upload_to='shared_template_folder/',default="template")
    plain_template = models.FileField(upload_to='shared_template_folder/',default="plain template")
