from django import forms
from .models import Student1

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student1
        fields = ['name' , 'number']