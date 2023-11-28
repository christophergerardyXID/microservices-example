FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY pokemons.json .

EXPOSE 3001

CMD ["npm", "run", "start"]