FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY trainers.json .

EXPOSE 3003

CMD ["npm", "run", "start"]