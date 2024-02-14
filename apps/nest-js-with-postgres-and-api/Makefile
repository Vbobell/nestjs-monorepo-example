start-dependencies:
	PROJECT=nest-js-with-postgres-and-api NODE_ENV=local npm run db:typeorm:migration:run ; \
	PROJECT=nest-js-with-postgres-and-api NODE_ENV=local npm run db:typeorm:seed:run ; \
	PROJECT=nest-js-with-postgres-and-api NODE_ENV=test npm run db:typeorm:migration:run ; \


	