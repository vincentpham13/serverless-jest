pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim' 
      args '-p 3000:3000'
      label 'node-agent'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh "chmod +x -R ${env.WORKSPACE}"
        sh 'ls __ci__'
        sh 'sh __ci__/run-test.sh'
      }
      post {
        always {
          echo 'Finish testing'
        } 
      }
    }
  }
  post {
    success {
      node('master') {
        echo "The message was changed already!"
        echo "Cleaning the workspace!"
        sh 'ls -la'
      }
    }
  }
}