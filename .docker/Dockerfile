FROM node:latest

RUN mkdir -p /meetTrack/app
WORKDIR /meetTrack

COPY apps/app/package.json /meetTrack/app/
COPY apps/app/app /meetTrack/app

RUN npm install --omit=dev

EXPOSE 6001/tcp

CMD [ "npm", "run", "start" ]