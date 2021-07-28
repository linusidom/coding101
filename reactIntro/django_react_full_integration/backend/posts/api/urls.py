from django.urls import path
from posts.api import views

app_name = 'posts_api'

urlpatterns = [
    path('post_list', views.PostListAPIView.as_view()),
    path('post_retrieve/<int:pk>', views.PostRetrieveAPIView.as_view()),
    path('post_create', views.PostCreateAPIView.as_view()),
    path('post_update/<int:pk>', views.PostUpdateAPIView.as_view()),
    path('post_destroy/<int:pk>', views.PostDestroyAPIView.as_view()),

]