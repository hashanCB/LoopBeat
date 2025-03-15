
def gv
pipeline {
    agent any

    environment {
        NODE_VERSION = '20.16.0' // Change to your desired Node.js version
        PROJECT_DIR = 'mySongs' // Change to your project directory
        IMAGE_NAME = 'mysongs'
        DOCKER_USER = 'hashancch'
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

           stage('init') {
            steps {
                script {
                   gv = load "script.groovy"
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
        stage('Increment Version') {
            steps {
                script {
                    // Increment package version
                    sh 'npm version patch --no-git-tag-version'

                    // Ensure Jenkins reads the updated file
                    sleep(2)

                    // Read updated package.json and extract the version correctly
                    env.VERSION = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()

                    echo "New version: ${env.VERSION}"
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
                    gv.BuildProject()
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                script {
                        gv.ImagePushDockerHub()
                }
            }
        }


            stage('Commit & Push Version Change') {
            steps {
                script {
                    gv.GitCommit()
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
