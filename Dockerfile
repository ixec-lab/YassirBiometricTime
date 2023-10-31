FROM node

RUN mkdir -p /usr/app/yassir

WORKDIR /usr/app/yassir

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "prod" ]