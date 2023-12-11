PROJECTS := nest-js-with-postgres-and-api

start-dependencies:
	docker-compose -f ./apps/**/*.yml up -d

	for project in $(PROJECTS); do \
			PROJECT=$$project NODE_ENV=local npm run db:typeorm:migration:run ; \
			PROJECT=$$project NODE_ENV=test npm run db:typeorm:migration:run ; \
	done
	
stop-dependencies:
	docker-compose -f ./apps/**/*.yml down