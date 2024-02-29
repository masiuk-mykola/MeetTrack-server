FROM node:latest

RUN mkdir -p /meetTrack/app
WORKDIR /meetTrack

COPY apps/app/package.json .
COPY apps/app/app ./app

RUN npm install --omit=dev

EXPOSE 6001/tcp

CMD [ "npm", "run", "start" ]