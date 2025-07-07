#!/bin/bash
echo 'Generating package.json and installing dependencies...'

echo 'Setting up Authentication_Microservice...'
cd Authentication_Microservice
npm init -y
npm install express mongoose jsonwebtoken dotenv
cd ..

echo 'Setting up APIGateway_Microservice...'
cd APIGateway_Microservice
npm init -y
npm install express http-proxy jsonwebtoken dotenv
cd ..

echo 'Setting up Budget-Service...'
cd Budget-Service
npm init -y
npm install express mongoose dotenv
cd ..

echo 'Setting up Club-Service...'
cd Club-Service
npm init -y
npm install express mongoose dotenv
cd ..

echo 'Setting up Event-Service...'
cd Event-Service
npm init -y
npm install express mongoose dotenv
cd ..

echo 'Setting up Inventory-Service...'
cd Inventory-Service
npm init -y
npm install express mongoose dotenv
cd ..