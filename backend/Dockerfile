FROM python:3.9-slim-bullseye


RUN mkdir -p /app

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

EXPOSE $PORT

CMD python manage.py runserver 0:8000