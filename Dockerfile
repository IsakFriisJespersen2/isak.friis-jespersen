FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare yarn && yarn -v

WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

COPY package*.json .

COPY . .

RUN corepack enable
RUN yarn build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 5173
EXPOSE 3000

ENV NODE_ENV=production

CMD ["node","build/index.js"]


