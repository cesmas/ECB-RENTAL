FROM node:12
WORKDIR /Login

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node", "App.js"]