def ImagePushDockerHub() {
       withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh '''
                        echo "$PASS" | docker login -u "$USER" --password-stdin
                        docker tag ${IMAGE_NAME}:${VERSION} ${DOCKER_USER}/${IMAGE_NAME}:${VERSION}
                        docker push ${DOCKER_USER}/${IMAGE_NAME}:${VERSION}
                        '''
                    }
}



return this