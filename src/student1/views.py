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
    #print(request.POST)

    post_name = request.POST["name"]
    post_number = request.POST["number"]
    post_targettable = request.POST["targettable"]
    print(post_name , post_number , post_targettable)

    if post_targettable == "1":
        print("target table 1")
        Student1_obj =  Student1.objects.create(
            name = post_name,
            number= post_number,
        )
        Student2.objects.filter(name=post_name).delete()
    

    if post_targettable == "2":
        Student2_obj =  Student2.objects.create(
            name = post_name,
            number= post_number,
        )
        Student1.objects.filter(name=post_name).delete()


    data = {
        "src" : "changes done"
    }

    return JsonResponse(data)
    # print(targetrow.name)
    # print(targetrow.number)

    
    # Handling POST
    # print(request.POST)

    # form = StudentForm(request.POST)

    # if form.is_valid():
    #     form.save()
    
    # data = {
    #     "src" : "this is success"
    # }

    # return JsonResponse(data)

    # Handling GET
    # print(request.GET)
    # req = request.GET.get("req", None)
    # print(req)
    # data = {
    #     "src" : "this is a message from host!"
    # }
    # return JsonResponse(data)