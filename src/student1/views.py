from django.shortcuts import render
from .models import Student1
from student2.models import Student2

# Create your views here.
def student_view(request):
    Std1 = Student1.objects.all()
    Std2 = Student2.objects.all()
    context = {
        "Std1" : Std1,
        "Std2" : Std2,
    }


    return render(request, "home.html" , context)