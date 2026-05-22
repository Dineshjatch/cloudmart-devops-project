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

                sh 'docker build -t nexusops-frontend:${BUILD_NUMBER} ./frontend'

            }

        }

        stage('Build Backend Image') {

            steps {

                sh 'docker build -t nexusops-backend:${BUILD_NUMBER} ./backend'

            }

        }

        stage('Load Images into Minikube') {

            steps {

                sh 'minikube image load nexusops-frontend:${BUILD_NUMBER}'
                sh 'minikube image load nexusops-backend:${BUILD_NUMBER}'

            }

        }

        
        stage('Deploy to Kubernetes') {

            steps {

                sh "sed -i 's|image: nexusops-frontend.*|image: nexusops-frontend:${BUILD_NUMBER}|g' k8s/frontend/frontend-deployment.yaml"

                sh "sed -i 's|image: nexusops-backend.*|image: nexusops-backend:${BUILD_NUMBER}|g' k8s/backend/backend-deployment.yaml"

                sh 'kubectl apply -f k8s/namespace.yaml'

                sh 'kubectl apply -f k8s/postgres/'
                sh 'kubectl apply -f k8s/backend/'
                sh 'kubectl apply -f k8s/frontend/'
                sh 'kubectl apply -f k8s/monitoring/'

                sh 'kubectl rollout restart deployment/frontend -n nexusops'
                sh 'kubectl rollout restart deployment/backend -n nexusops'

                
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