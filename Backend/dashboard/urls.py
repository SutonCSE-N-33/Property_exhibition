from django.urls import path
from .views import dashbaord_view, user_profile, all_property_manage

urlpatterns = [
    path("", dashbaord_view, name="dashboard"),
    path("user", user_profile, name="user_profile"),
    path("properties", all_property_manage, name="all_properties"),
]
