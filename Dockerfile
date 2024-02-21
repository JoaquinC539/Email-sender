FROM node:20-alpine3.19

WORKDIR /var/www/app

COPY . .

RUN npm install

EXPOSE 3500

CMD npm start