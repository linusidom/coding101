# Generated by Django 3.1.6 on 2021-02-09 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0005_auto_20210209_0833'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='number_of_copies',
            field=models.IntegerField(default=5),
            preserve_default=False,
        ),
    ]