pipeline {
    agent any

    environment {
        // Set your Node.js version
        NODE_VERSION = '16' // Change to your desired Node.js version
        // Set your project directory
        PROJECT_DIR = 'your-nextjs-project' // Change to your project directory
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
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
                dir(env.PROJECT_DIR) {
                    // Install npm dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Lint Code') {
            steps {
                dir(env.PROJECT_DIR) {
                    // Run ESLint to lint the code
                    sh 'npm run lint'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir(env.PROJECT_DIR) {
                    // Run tests (e.g., Jest)
                    sh 'npm test'
                }
            }
        }

        stage('Build Project') {
            steps {
                dir(env.PROJECT_DIR) {
                    // Build the Next.js project
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir(env.PROJECT_DIR) {
                    // Add deployment steps here (e.g., deploy to Vercel, AWS, etc.)
                    echo 'Deploying the application...'
                    // Example: sh 'npm run deploy'
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