# Generated by Django 3.1.5 on 2021-03-26 23:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cheque',
            name='category',
        ),
        migrations.RemoveField(
            model_name='cheque',
            name='created_by',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Cheque',
        ),
    ]
