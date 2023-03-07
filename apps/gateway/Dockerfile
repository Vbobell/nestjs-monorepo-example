
FROM node:18.14.2-alpine As development
 
WORKDIR /user/src/gateway-app
 
COPY --chown=node:node package*.json ./
 
RUN npm ci

USER node

FROM node:18.14.2-alpine As build

WORKDIR /user/src/gateway-app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /user/src/gateway-app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build:gateway

ENV NODE_ENV production

RUN npm ci --omit=dev

USER node

FROM node:18.14.2-alpine As production

COPY --chown=node:node --from=build /user/src/gateway-app/node_modules ./node_modules
COPY --chown=node:node --from=build /user/src/gateway-app/dist ./dist

CMD ["node", "dist/apps/gateway/main"]