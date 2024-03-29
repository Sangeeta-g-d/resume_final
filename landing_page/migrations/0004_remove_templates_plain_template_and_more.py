# Generated by Django 4.2.6 on 2024-02-23 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing_page', '0003_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='templates',
            name='plain template',
        ),
        migrations.AddField(
            model_name='templates',
            name='plain_template',
            field=models.FileField(default='plain template', upload_to='shared_template_folder/'),
        ),
        migrations.AlterField(
            model_name='templates',
            name='template',
            field=models.FileField(default='template', upload_to='shared_template_folder/'),
        ),
    ]
