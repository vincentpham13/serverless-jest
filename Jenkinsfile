pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        label 'test-agent1'
      }
      steps {
        sh 'ls -la'
      }
    }
  }
}