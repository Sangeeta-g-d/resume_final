# Generated by Django 4.1.7 on 2024-02-24 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing_page', '0006_ectracted_resume_details'),
    ]

    operations = [
        migrations.AddField(
            model_name='ectracted_resume_details',
            name='email',
            field=models.CharField(default='email', max_length=100),
        ),
        migrations.AddField(
            model_name='ectracted_resume_details',
            name='phone_number',
            field=models.CharField(default='123', max_length=100),
        ),
    ]
