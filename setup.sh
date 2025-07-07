#!/bin/bash

echo "Installing global tools..."
npm install -g concurrently nodemon
npm install http-proxy-middleware

echo "Setting up Clubbie project..."

# List of services
services=(
  "Authentication_Microservice"
  "APIGateway_Microservice"
  "Budget-Service"
  "Club-Service"
  "Event-Service"
  "Inventory-Service"
)

# Loop through each service
for service in "${services[@]}"; do
  echo "Checking $service..."
  if [ -d "$service" ]; then
    cd "$service"
    if [ -f "package.json" ]; then
      echo "Installing dependencies for $service..."
      npm install
    else
      echo "⚠️ Skipped $service: No package.json found"
    fi
    cd ..
  else
    echo "❌ $service directory not found"
  fi
done

echo "✅ Setup complete! All dependencies installed and tools ready."
