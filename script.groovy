def ImagePushDockerHub() {
       withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh '''
                        echo "$PASS" | docker login -u "$USER" --password-stdin
                        docker tag ${IMAGE_NAME}:${VERSION} ${DOCKER_USER}/${IMAGE_NAME}:${VERSION}
                        docker push ${DOCKER_USER}/${IMAGE_NAME}:${VERSION}
                        '''
                    }
}

def BuildProject() {
       echo "Building Docker image with version: ${env.VERSION}"
       sh "docker build -t ${IMAGE_NAME}:${env.VERSION}   ."
}

def GitCommit(){
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

def GitIncrementVersion () {
          // Increment package version
                    sh 'npm version patch --no-git-tag-version'

                    // Ensure Jenkins reads the updated file
                    sleep(2)

                    // Read updated package.json and extract the version correctly
                    env.VERSION = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()

                    echo "New version: ${env.VERSION}"
}



return this