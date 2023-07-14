
FROM node:18.16.1-alpine As development
 
WORKDIR /user/src/nest-js-with-postgres-and-api-app
 
COPY --chown=node:node package*.json ./
 
RUN npm ci

USER node

FROM node:18.16.1-alpine As build

WORKDIR /user/src/nest-js-with-postgres-and-api-app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /user/src/nest-js-with-postgres-and-api-app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build:nest-js-with-postgres-and-api

ENV NODE_ENV production

RUN npm ci --omit=dev

USER node

FROM node:18.16.1-alpine As production

COPY --chown=node:node --from=build /user/src/nest-js-with-postgres-and-api-app/node_modules ./node_modules
COPY --chown=node:node --from=build /user/src/nest-js-with-postgres-and-api-app/dist ./dist

CMD ["node", "dist/apps/nest-js-with-postgres-and-api/main"]