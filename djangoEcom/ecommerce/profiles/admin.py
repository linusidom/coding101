from django.contrib import admin

# Register your models here.
from profiles.models import Profile,PurchasedCourse

class PurchasedCourseAdmin(admin.ModelAdmin):
	list_display = ['course', 'teacher', 'student']

admin.site.register(Profile)
admin.site.register(PurchasedCourse, PurchasedCourseAdmin)