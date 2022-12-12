# using node image
FROM node:14.17.5

# making directory 
RUN mkdir -p /app

# marking it as working dir
WORKDIR /app

# copy package*.json from project dir to working dir
COPY package*.json ./

# installing project node dependencies
RUN npm install

# copy whole project files in working dir
COPY . .

# exposing container port
EXPOSE $PORT

# building the react project
RUN npm run build

# installing the node's serve package to run project optimized build file 
RUN npm install -g serve

# final command to start this frontend container service
CMD [ "serve","-s", "build" ]