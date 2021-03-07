from django.contrib import admin
from posts.models import Post


class PostAdminView(admin.ModelAdmin):
	list_display = ['title', 'slug']

admin.site.register(Post, PostAdminView)
