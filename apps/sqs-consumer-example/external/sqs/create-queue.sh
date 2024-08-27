#!/bin/bash

QUEUES=(
  'sqs-queue' 
)

for queue in "${QUEUES[@]}"
do
  echo "Creating queue ${queue}, please wait ..."
  aws sqs create-queue \
    --endpoint-url=http://localhost:9330 \
    --cli-input-json "$(cat $(pwd)/apps/sqs-consumer-example/external/sqs/queue-config.json)" \
    --queue-name ${queue} 
  echo "Created queue ${queue}"
  echo " "
done
