FROM node:21-bullseye-slim

RUN mkdir -p /meetTrack/app
WORKDIR /meetTrack

COPY package.json /meetTrack/
COPY app /meetTrack/app/

RUN npm install --omit=dev
