# Generated by Django 3.1.5 on 2021-03-26 23:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0002_auto_20210326_2322'),
        ('accounts', '0004_profile_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(null=True, upload_to='avatars'),
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
    ]
