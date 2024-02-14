PROJECTS := postgres-and-api-example

start-dependencies:
	docker compose -f ./apps/**/*.yml up -d

	for project in $(PROJECTS); do \
		  cd ./apps/$$project && $(MAKE) ; \
	done
	
stop-dependencies:
	docker-compose -f ./apps/**/*.yml down