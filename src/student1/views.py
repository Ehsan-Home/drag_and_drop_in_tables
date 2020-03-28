from django.shortcuts import render
from django.http import JsonResponse
from .models import Student1
from student2.models import Student2
from django import forms
from .forms import StudentForm

# Create your views here.
def student_view(request):
    print("in student view")
    Std1 = Student1.objects.all()
    Std2 = Student2.objects.all()
    form = StudentForm()
    context = {
        "Std1" : Std1,
        "Std2" : Std2,
        "form" : form,
    }
    return render(request, "home.html" , context)


def submit_button_view(request):
    print("in AJAX view")
    print(request.POST)

    form = StudentForm(request.POST)

    if form.is_valid():
        form.save()
    
    data = {
        "src" : "this is success"
    }

    return JsonResponse(data)

    # Handling GET
    # print(request.GET)
    # req = request.GET.get("req", None)
    # print(req)
    # data = {
    #     "src" : "this is a message from host!"
    # }
    # return JsonResponse(data)