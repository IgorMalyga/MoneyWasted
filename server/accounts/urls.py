from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token


from .views import current_user, UserList, SignIn


urlpatterns = [
    path('login/', SignIn.as_view()),
    path('verify-token/', verify_jwt_token),
    path('current-user/', current_user),
    path('users/', UserList.as_view())
]
