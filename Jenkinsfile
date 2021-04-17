pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        label 'master'
      }
      steps {
        sh 'ls -la'
      }
    }
  }
  post {
    success {
      node('master') {
        echo "We should bump the version here!"
        echo "Cleaning the workspace!"
        sh 'ls -la'
      }
    }
  }
}