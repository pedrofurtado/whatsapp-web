FROM node:10

RUN mkdir /app
WORKDIR /app
COPY . /app
VOLUME /app
EXPOSE 3000

CMD npm install && npm start
