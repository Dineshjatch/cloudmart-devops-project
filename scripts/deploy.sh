#!/bin/bash

echo "Starting NexusOps Deployment..."

cd /home/ubuntu/nexusops-platform

# Build Docker Images
docker build -t nexusops-frontend ./frontend
docker build -t nexusops-backend ./backend

# Load Images into Minikube
minikube image load nexusops-frontend
minikube image load nexusops-backend

# Deploy Kubernetes Resources
kubectl apply -f k8s/namespace.yaml

kubectl apply -f k8s/postgres/
kubectl apply -f k8s/backend/
kubectl apply -f k8s/frontend/

echo "Deployment Completed Successfully"