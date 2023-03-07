
FROM node:18.14.2-alpine As development
 
WORKDIR /user/src/sw-app
 
COPY --chown=node:node package*.json ./
 
RUN npm ci

USER node

FROM node:18.14.2-alpine As build

WORKDIR /user/src/sw-app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /user/src/sw-app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build:sw

ENV NODE_ENV production

RUN npm ci --omit=dev

USER node

FROM node:18.14.2-alpine As production

COPY --chown=node:node --from=build /user/src/sw-app/node_modules ./node_modules
COPY --chown=node:node --from=build /user/src/sw-app/dist ./dist

CMD ["node", "dist/apps/sw/main"]