from django.urls import path
from posts import views

app_name = 'posts'

urlpatterns = [
    path('', views.PostListView.as_view(), name='post_list'),
    path('create', views.PostCreateView.as_view(), name='post_create'),
    path('detail/<slug:slug>', views.PostDetailView.as_view(), name='post_detail'),
    path('update/<slug:slug>', views.PostUpdateView.as_view(), name='post_update'),
    path('delete/<slug:slug>', views.PostDeleteView.as_view(), name='post_delete'),
    path('search', views.post_search, name='post_search'),
]
