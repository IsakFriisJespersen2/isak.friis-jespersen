FROM node:18-alpine3.14 AS builder

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 5173
EXPOSE 3000

ENV NODE_ENV=production

CMD ["node","build/index.js"]


