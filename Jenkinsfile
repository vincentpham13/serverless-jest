pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim' 
      args '-p 3000:3000'
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
        sh 'ls __ci__'
        sh 'sh __ci__/run-test.sh'
      }
      post {
        always {
          echo 'Display dir and finish testing'
          sh 'ls -a'
        } 
      }
    }
  }
  post {
    success {
      node('master') {
        echo "The message was changed already!"
        echo "Cleaning the workspace!"
      }
    }
  }
}