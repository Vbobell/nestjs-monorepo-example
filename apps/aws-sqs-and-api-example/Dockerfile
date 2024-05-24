
FROM node:20.13.1-alpine As development
 
WORKDIR /user/src/aws-sqs-and-api-example-app
 
COPY --chown=node:node package*.json ./
 
RUN npm ci

USER node

FROM node:20.13.1-alpine As build

WORKDIR /user/src/aws-sqs-and-api-example-app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /user/src/aws-sqs-and-api-example-app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build:aws-sqs-and-api-example

ENV NODE_ENV production

RUN npm ci --omit=dev

USER node

FROM node:20.13.1-alpine As production

COPY --chown=node:node --from=build /user/src/aws-sqs-and-api-example-app/node_modules ./node_modules
COPY --chown=node:node --from=build /user/src/aws-sqs-and-api-example-app/dist ./dist

CMD ["node", "dist/apps/aws-sqs-and-api-example/main"]