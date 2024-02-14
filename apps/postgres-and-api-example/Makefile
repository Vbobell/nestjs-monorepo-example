start-dependencies:
	PROJECT=postgres-and-api-example NODE_ENV=local npm run db:typeorm:migration:run ; \
	PROJECT=postgres-and-api-example NODE_ENV=local npm run db:typeorm:seed:run ; \
	PROJECT=postgres-and-api-example NODE_ENV=test npm run db:typeorm:migration:run ; \


	