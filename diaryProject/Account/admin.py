from django.contrib import admin
from .models import User, Diary, Likes

# Register your models here.
admin.site.register(User)
admin.site.register(Diary)
