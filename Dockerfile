FROM node:10

RUN npm install -g create-react-app yarn

RUN mkdir /app
WORKDIR /app
COPY . /app
VOLUME /app
EXPOSE 3000

CMD yarn install && yarn start
