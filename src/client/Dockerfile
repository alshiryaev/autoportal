FROM node:lts-alpine3.14
WORKDIR /usr/app/src

COPY package.json ./
RUN npm install

# add app
COPY . ./
