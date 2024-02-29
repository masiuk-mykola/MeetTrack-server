FROM node:latest

RUN mkdir -p /meetTrack/app
WORKDIR /meetTrack

COPY ./package.json /meetTrack/
COPY ./app /meetTrack/app/

RUN npm install --omit=dev

EXPOSE 6001/tcp

CMD [ "npm", "run", "start" ]