pipeline {
    agent any

    environment {
        // Set your Node.js version
        NODE_VERSION = 'nodejs' // Change to your desired Node.js version
        // Set your project directory
        PROJECT_DIR = 'mySongs' // Change to your project directory
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                echo "Checkout the code from the repository" 
            }
        }

        stage('Setup Node.js') {
            steps {
                // Set up the Node.js environment
                sh "nvm install ${NODE_VERSION}"
                sh "nvm use ${NODE_VERSION}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                echo "npm run lint"
            }
        }

        stage('Run Tests') {
            steps {
                echo "npm test"
            }
        }

        stage('Build Project') {
            steps {
                echo " build Project"
            }
        }

        stage('Deploy') {
            steps {
                 echo 'Deploying the application...'
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