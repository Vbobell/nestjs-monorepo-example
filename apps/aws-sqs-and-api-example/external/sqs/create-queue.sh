#!/bin/bash

QUEUES=(
  'aws-sqs-and-api-queue' 
)

for queue in "${QUEUES[@]}"
do
  echo "Creating queue ${queue}, please wait ..."
  aws sqs create-queue \
    --endpoint-url=http://localhost:9330 \
    --cli-input-json "$(cat $(pwd)/apps/aws-sqs-and-api-example/external/sqs/queue-config.json)" \
    --queue-name ${queue} 
  echo "Created queue ${queue}"
  echo " "
done
