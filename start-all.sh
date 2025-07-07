concurrently --kill-others-on-fail \
  "cd Authentication_Microservice && nodemon authentication-service.js" \
  "cd Club-Service && nodemon index.js" \
  "cd Event-Service && nodemon index.js" \
  "cd Budget-Service && nodemon index.js" \
  "cd Inventory-Service && nodemon index.js" \
  # "cd APIGateway_Microservice && nodemon api-gateway.js"
