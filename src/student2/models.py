from django.db import models

# Create your models here.
class Student2(models.Model):
    name = models.CharField(max_length=50)
    number = models.IntegerField()