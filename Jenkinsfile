pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        label 'test-agent-testt'
      }
      steps {
        sh 'ls -la'
      }
    }
  }
}