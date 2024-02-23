from django.db import models

# Create your models here.


class Templates(models.Model):
    template = models.FileField(upload_to='templates/')