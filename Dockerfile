FROM node:22.17-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 9090

CMD ["serve", "-s", "dist", "-l", "9090"]