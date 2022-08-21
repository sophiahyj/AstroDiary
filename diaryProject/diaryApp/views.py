from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Diary
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.
def signup(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        found_user = User.objects.filter(username=username)
        if len(found_user):
            error = "이미 존재하는 아이디입니다."
            return render(request, "registration/signup.html", {"error": error})
        new_user = User.objects.create_user(username=username, password=password)
        auth.login(request, new_user)
        return redirect("index")
        
    return render(request, "registration/signup.html")


def login(request):
    if request.method == "POST":
        username=request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect("index")
        error = "아이디 혹은 비밀번호가 틀립니다."
        return render(request, "registration/login.html", {"error": error})

    return render(request, "registration/login.html")


def logout(request):
    auth.logout(request)

    return redirect("index")

def index(request):
    return render(request, 'index.html')

def fishing(request):
    return render(request, 'fishing.html')

def background(request):
    return render(request, 'background.html')

def detail(request):
    return render(request, 'detail.html')
    
@csrf_exempt
def DiaryView(request):
    if request.method == 'POST':
        diary = Diary.objects.create(
            todos = request.POST['todos'],
            content = request.POST['content'],
            creator = User.objects.get(username=request.POST['username']),
        )
        return JsonResponse({'msg': "link 생성완료"})
    