from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseForbidden,HttpResponseBadRequest
from django.template import loader
from django.contrib.auth import authenticate,login,logout
from .models import Templates
# Create your views here.


def index(request):
    return render(request,'index.html')

def admin_login(request):
    if request.method == 'POST':
        print("hiiiiiiiiiiii")
        username = request.POST.get('username')
        print(username)
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_superuser:
            print("yessssss")
            login(request, user)
            print("useaaaaaaaaa",user)
            print(request.user)
            return redirect('/admin_db')
        else:
            
            return redirect('/admin_login')
    return render(request,'admin_login.html')


def admin_db(request):
    if request.method == 'POST':
        print("hiiiiiiiiiiii")
        template = request.FILES.get('template')
        plain_template = request.FILES.get('plain_template')
        obj = Templates.objects.create(template=template,plain_template=plain_template)
        return redirect('/admin_db')

    return render(request,'admin_db.html')