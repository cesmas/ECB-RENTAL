pipeline {
    agent any

    stages {
        stage('Linter') {
            steps {
                echo 'Running linter'
                echo 'npm run eslint by package.json scripting ... in future'
            }
        }
        stage('Unit test') {
            steps {
                echo 'Running unit test '
                echo 'npm run test by package.json scripting ... in future'
            }
        }
        stage('Docker container') {
            steps {
                echo 'Building container'
                sh '''#!/bin/bash
                    docker build -t inieves/ecb-rental-car
                    docker run -p 4000:4000 -d inieves/ecb-rental-car
                '''
            }
        }
    }
}