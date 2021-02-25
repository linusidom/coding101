from django.urls import path
from comments import views

app_name = 'comments'

urlpatterns = [
    path('', views.CommentListView.as_view(), name='comment_list'),
    path('create/<slug:slug>', views.CommentCreateView.as_view(), name='comment_create'),
    # path('detail/<slug:slug>', views.PostDetailView.as_view(), name='post_detail'),
    # path('update/<slug:slug>', views.PostUpdateView.as_view(), name='post_update'),
    # path('delete/<slug:slug>', views.PostDeleteView.as_view(), name='post_delete'),
]
