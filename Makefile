start-dependencies:
	docker-compose -f ./apps/**/*.yml up
	
stop-dependencies:
	docker-compose -f ./apps/**/*.yml down