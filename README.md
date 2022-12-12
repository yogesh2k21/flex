# Problem Statement: 📃
Assume that you are the CTO for the outsourcing firm which has been chosen to build an
admission form for the Yoga Classes which happen every month.
Requirements for the admission form are:

- Only people within the age limit of 18-65 can enroll for the monthly classes and they will
be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
every month and he can pay it any time of the month.
- They can enroll any day but they will have to pay for the entire month. The monthly fee is
500/- Rs INR.
- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
participants can choose any batch in a month and can move to any other batch next
month. I.e. participants can shift from one batch to another in different months but in
same month they need to be in same batch

# Tools ⚒️ and Tech Stack 🧑‍💻
- Django is used for backend, its a Python based web backend Framework.
- ReactJS is used for frontend, its a JS Labrary.
- TailwindCSS is used for frontend UI, its a CSS framework.
- React-Toastify is library is used for show response in frontend when submitting form
- Docker is used for Containerize the application to make it cloud native.
- Database is SQLite which comes within Django when we crate new Django Project.

# My Approach 🎯💡
- I have create Form in ReactJS that takes required Data about Yoga classes admission

![Screenshot (53)](https://user-images.githubusercontent.com/52989607/206984230-1ebccabe-dfe0-4723-a329-79b244dd47af.png)


- after taking data we are verifying that data according to the given constraints in ReactJS using condition that must be passed before going further.

- After verifying, Now taking that data and making a JSON payload in JS that is being passed in the API as data and API methiod is POST because we are saving the data via Backend in database.

```
const response = await fetch("http://127.0.0.1:8000/", {
        method: "POST", // *POST bcoz we are send and save data in DB
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          phone: formData.phone,
          batch: formData.batch,
          month: formData.month,
          amount: formData.amount,
        }),
      });
```

- In backend I am taking data out from request and make a USER table object and putting all user detail in that object and saving it.
```
    json_data = json.loads(request.body.decode("utf-8"))
    user=User(name=json_data['name'],age=int(json_data['age']),mobile=json_data['phone'])
    user.save()
```
- after that making a new TRANSACTION table object and putting all required data in that object and along with putting that USER object in TRANSACTION table user_id field and saving it.

```
    trans=Transaction(user=user,amount=int(json_data['amount']),status=Status.SUCCESSFULL,batch=json_data['batch'],batch_month=json_data['month'])
    trans.save()
```
- after SUCCESSFULLY saving data we are returning true in JSON response that toggle the reactify-toaster popup in frontend.

after submitting form image
![Screenshot (55)](https://user-images.githubusercontent.com/52989607/206984267-23622434-54c1-4129-8455-5bee33b777e2.png)

# Database Schema Design 💾

![dbs](https://user-images.githubusercontent.com/52989607/206984328-f164d152-1b3e-473d-8379-b876777f1d25.png)

Here I have created 2 tables TRANSACTION and USER.

## USER table detail
- id - Primary Key
- name
- age
- mobile

## TRANSACTION table detail
- id - Primary Key
- amount
- status
- batch
- date
- user_id - This field is in Foreign Key Relation with USER table that denotes this transaction is of which user.
- batch_month

## Status Enum which denoted that transaction is successfull or not

# Installation & Requirements 🏗️🏭
- Only Docker is required in the system. We Containerize the application to make it cloud native.
- Now run these commands given below
```
> git clone https://github.com/yogesh2k21/flex.git
> cd /flex
> docker-compose up --build
```
Done!!

Now Application is ready to use

Just open browser and type
```
http://localhost:3000/
```

# Cloud architecture | [AWS Link](http://43.205.216.35:3000/)
- For Hosting we are using AWS EC2.
- Added one inbound rules on that EC2 so that it will server all in coming traffic.

# References
- [Django](https://www.djangoproject.com/)
- [Django-cors-headers](https://pypi.org/project/django-cors-headers/)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Docker](https://docs.docker.com/)
- [AWS](https://aws.amazon.com/documentation-overview/ec2/)
