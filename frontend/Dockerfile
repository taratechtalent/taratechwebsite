FROM node:20.8.0-bullseye-slim

WORKDIR /app

COPY package.json  ./

RUN npm install

COPY . .

RUN npm run build
