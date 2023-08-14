FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npx @nestjs/cli@latest

COPY . .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

CMD ["node", "dist/main"]