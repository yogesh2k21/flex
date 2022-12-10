from django.db import models
from django.core.validators import RegexValidator

class Status(models.TextChoices):
    SUCCESSFULL='SUCCESSFULL'
    FAILED='FAILED'

phone_regex = RegexValidator(regex=r'^\d{10,10}$', message="Phone number must be entered in the format: 0123456789 ")
class User(models.Model):
    name=models.CharField(max_length=50)
    age=models.IntegerField(default=18)
    mobile=models.CharField(validators=[phone_regex],max_length=10,null=True,blank=True)
    def __str__(self) -> str:
        return f'Username - {self.name}'

class Transaction(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    amount=models.IntegerField(default=0)
    status=models.CharField(choices=Status.choices, max_length=50,default=Status.FAILED)
    batch=models.CharField(max_length=50)
    date=models.DateField(auto_now_add=True)
    batch_month=models.CharField(default='January', max_length=50,blank=False,null=False)
    def __str__(self) -> str:
        return f'Transaction ID - {self.id}'