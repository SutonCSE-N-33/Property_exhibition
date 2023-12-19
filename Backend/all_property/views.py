from django.shortcuts import render, HttpResponse

# Create your views here.
def propertylist(request):
    return render(request,'property.html')

def detailproperty(request):
    return render(request,'detail.html')