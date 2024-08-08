FROM node:18-alpine

WORKDIR /

COPY package.json .

RUN npm install --legacy-peer-deps

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]