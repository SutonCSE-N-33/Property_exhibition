from django.shortcuts import render


# Create your views here.
def dashbaord_view(request):
    return render(request, "dashboard.html")


def user_profile(request):
    return render(request, "user_profile.html")


def all_property_manage(request):
    return render(request, "all_properties.html")
