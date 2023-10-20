FROM node:alpine

WORKDIR /usr/code/app

COPY package*.json .

RUN npm ci

COPY . .

# Expose the port your Node.js application is running on
EXPOSE 3000

CMD [ "npm", "start" ]
