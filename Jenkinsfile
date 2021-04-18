pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        label 'master'
      }
      steps {
        sh "chmod +x -R ${env.WORKSPACE}"
        sh '__ci__/run-test.sh'
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