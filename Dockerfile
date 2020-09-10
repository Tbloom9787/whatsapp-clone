FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install && npm cache verify

COPY . /app

CMD ["npm", "run", "build"]