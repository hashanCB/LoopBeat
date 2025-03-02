pipeline {
    agent any

    environment {
        NODE_VERSION = '20.16.0' // Change to your desired Node.js version
        PROJECT_DIR = 'mySongs' // Change to your project directory
         VERSION = ""
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
                    // Increment package version (patch, minor, major)
                    sh 'npm version patch --no-git-tag-version'

                    // Extract the new version from package.json
                    VERSION = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()

                    echo "New version: ${VERSION}"
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
                    sh 'docker build -t mysong:${VERSION} .'
                }
            }
        }

            stage('Commit & Push Version Change') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'github-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
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
