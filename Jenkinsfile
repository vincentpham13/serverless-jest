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
}