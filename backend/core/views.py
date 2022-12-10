from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User,Transaction,Status

# Create your views here.
@csrf_exempt 
def index(request):
    json_data = json.loads(request.body.decode("utf-8"))
    user=User(name=json_data['name'],age=int(json_data['age']),mobile=json_data['phone'])
    user.save()
    try:
        trans=Transaction(user=user,amount=int(json_data['amount']),status=Status.SUCCESSFULL,batch=json_data['batch'],batch_month=json_data['month'])
        trans.save()
    except Exception as e:
        print(e)
        trans=Transaction(user=user,amount=int(json_data['amount']),status=Status.FAILED,batch=json_data['batch'],batch_month=json_data['month'])
        trans.save()
        return JsonResponse(data={"response":False}, safe=False)
    return JsonResponse(data={"response":True,"ID":str(trans.id)}, safe=False)