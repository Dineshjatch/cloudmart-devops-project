#!/bin/bash

# Update system
apt update -y
apt upgrade -y

# Install packages
apt install -y \
    curl \
    wget \
    unzip \
    git \
    apt-transport-https \
    ca-certificates \
    gnupg \
    lsb-release \
    software-properties-common

# Install Java 17
apt install openjdk-17-jdk -y

# Install Maven
apt install maven -y

# Install Docker
apt install docker.io -y

systemctl start docker
systemctl enable docker

# Add ubuntu user to docker group
usermod -aG docker ubuntu

# Restart Docker
systemctl restart docker

# Install AWS CLI
apt install awscli -y

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

install minikube-linux-amd64 /usr/local/bin/minikube

# Install Jenkins
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key \
| tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ \
| tee /etc/apt/sources.list.d/jenkins.list > /dev/null

apt update -y

apt install jenkins -y

systemctl enable jenkins
systemctl start jenkins

# Wait before starting Minikube
sleep 30

# Start Minikube as ubuntu user
sudo -u ubuntu minikube start --driver=docker

# Verify cluster
sudo -u ubuntu kubectl get nodes

# Clone GitHub repository
cd /home/ubuntu

sudo -u ubuntu git clone https://github.com/Dineshjatch/cloudmart-devops-project.git

# Fix permissions
chown -R ubuntu:ubuntu /home/ubuntu/cloudmart-devops-project