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
                     echo "Building Docker image with version: ${env.VERSION}"
                     sh "docker build -t ${IMAGE_NAME}:${env.VERSION}   ."
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'PASS', usernameVariable: 'USER')]) { //github access key need to get anf  after jenkins cedination add username and password(key)
                        sh '''
                        sh "docker login -u ${PASS} -p ${USER}"
                        sh "docker tag ${IMAGE_NAME}:${env.VERSION} ${PASS}/${IMAGE_NAME}:${env.VERSION}"
                        sh "docker push ${DOCKER_USER}/${IMAGE_NAME}:${env.VERSION}"
                        '''
                    }
                }
            }
        }

            stage('Commit & Push Version Change') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'githubpat-key', passwordVariable: 'PASS', usernameVariable: 'USER')]) { //github access key need to get anf  after jenkins cedination add username and password(key)
                        sh '''
                        git config --global user.email "jenkins@hashan.com"
                        git config --global user.name "Jenkins"
                        git remote set-url origin https://${USER}:${PASS}@github.com/hashanCB/mySongs.git
                        git add -A
                        git diff --staged --quiet || git commit -m "ci: version bump [ci skip]"
                        git push origin HEAD:main
                        '''
                    }
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
