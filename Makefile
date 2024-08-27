PROJECTS := postgres-and-api-example sqs-consumer-example

start-dependencies:
	for project in $(PROJECTS); do \
		  docker compose -f ./apps/$$project/docker-compose.$$project.yml up -d; \
	done

	for project in $(PROJECTS); do \
		  cd ./apps/$$project && $(MAKE) ; \
	done
	
stop-dependencies:
	for project in $(PROJECTS); do \
		  docker compose -f ./apps/$$project/docker-compose.$$project.yml down; \
	done