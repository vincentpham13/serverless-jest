pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        label 'master'
      }
      steps {
        sh 'ls -la'
        sh 'npm install'
        sh 'npm test'
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