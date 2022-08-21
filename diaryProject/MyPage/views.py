from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from diaryApp.models import Diary
from datetime import datetime
import json
def MainMypage(request):
    today = datetime.now().date()
    # startdate = str(today.year) + '-' + str(today.month).zfill(2) + '-' + '01'
    # enddate = str(today.year) + '-' + str(today.month).zfill(2) + '-' + '31'

    my_diary = Diary.objects.filter(
        creator = request.user,
        diary_created_at__month = today.month
    )
    return render(request, 'mypage.html', {'diarys' : my_diary})

@csrf_exempt
@login_required(login_url='/registration/login')
def calendar(request, YearLooking, MonthLooking):

    
    # print(YearLooking)
    # print(MonthLooking)

    return render(request, 'mypage.html')
