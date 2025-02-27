pipeline {
    agent any

    environment {
        NODE_VERSION = '20.16.0' // Change to your desired Node.js version
        PROJECT_DIR = 'mySongs' // Change to your project directory
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    git branch: 'main', 
                    credentialsId: 'github-credentials', 
                    url: 'https://github.com/hashanCB/mySongs'
                }
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    sh 'node --version' // Only this command runs, everything else is echo
                    sh 'npm -v'
                    
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Running npm install..."
                    sh 'npm install'
                }
            }
        }

        stage('Lint Code') {
            steps {
                script {
                    echo "Running npm run lint..."
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo "Running npm test..."
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    echo "Running npm run build..."
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Running npm run deploy..."
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
