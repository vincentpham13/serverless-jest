pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        label 'test-agent'
      }
      steps {
        sh 'ls -la'
      }
    }
  }
}