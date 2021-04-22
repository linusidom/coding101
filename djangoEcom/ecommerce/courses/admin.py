from django.contrib import admin

# Register your models here.
from courses.models import Course, CourseFeedback

class CourseFeedbackAdmin(admin.ModelAdmin):
	list_display = ['course', 'course_rating']

admin.site.register(Course)
admin.site.register(CourseFeedback, CourseFeedbackAdmin)