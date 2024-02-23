from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseForbidden,HttpResponseBadRequest
from django.template import loader
from django.contrib.auth import authenticate,login,logout
# Create your views here.


def index(request):
    return render(request,'index.html')

def admin_login(request):
    return render(request,'admin_login.html')