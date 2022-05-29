FROM node:lts-alpine3.14
WORKDIR /usr/app/src
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install

# add app
COPY . ./