pipeline {

    agent any

    environment {

        PROJECT_NAME = "nexusops"

    }

    stages {

        

        stage('Verify Tools') {

            steps {

                sh 'docker --version'
                sh 'kubectl version --client'
                sh 'minikube status'

            }

        }

        stage('Build Frontend Image') {

            steps {

                sh 'docker build -t nexusops-frontend ./frontend'

            }

        }

        stage('Build Backend Image') {

            steps {

                sh 'docker build -t nexusops-backend ./backend'

            }

        }

        stage('Load Images into Minikube') {

            steps {

                sh 'minikube image load nexusops-frontend'
                sh 'minikube image load nexusops-backend'

            }

        }

        stage('Deploy to Kubernetes') {

            steps {

                sh 'kubectl apply -f k8s/namespace.yaml'

                sh 'kubectl apply -f k8s/postgres/'
                sh 'kubectl apply -f k8s/backend/'
                sh 'kubectl apply -f k8s/frontend/'

            }

        }

        stage('Wait for Pods') {

            steps {

                sh 'sleep 30'

            }

        }

        stage('Verify Deployment') {

            steps {

                sh 'kubectl get all -n nexusops'

            }

        }

    }

}