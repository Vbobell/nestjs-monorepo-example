start-dependencies:
	docker-compose -f ./apps/**/*.yml up -d
	npm run db:typeorm:nest-js-with-postgres-and-api:migration:run
	
stop-dependencies:
	docker-compose -f ./apps/**/*.yml down