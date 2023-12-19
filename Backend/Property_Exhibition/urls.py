from django.contrib import admin
from django.urls import path,include
from . import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path('',views.home, name='home'),
    path("", include("accounts.urls")),
    path("all_property/", include("all_property.urls")),
    path("dashboard/", include("dashboard.urls")),
]
