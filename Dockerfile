FROM node:14.17.5

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

RUN npm run build

RUN npm install -g serve

CMD [ "serve","-s", "build" ]