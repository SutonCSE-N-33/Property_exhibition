from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib.auth import authenticate, login


# Create your views here.
def register(request):
    return render(request, "register.html")


def update_profile(request):
    return render(request, "update_profile.html")


def user_login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            print("login success")
            return redirect("profile")
        else:
            redirect("login")
    return render(request, "signin.html")


def user_logout(request):
    logout(request)
    return redirect("login")
