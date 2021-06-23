def getEnvironment() {
    def branch = env.BRANCH_NAME
    if(branch == 'master') {
        return 'dev'
    } else if (branch == 'stage') {
        return 'stage'
    } else {
        return 'dev'
    }
}
def envString = getEnvironment()

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
    stage('Run migrations') {
      steps {
        echo "Performing migration ${envString}"
        dir ('scripts') {
          sh 'ls -a'
        }
        sh "npm run migrate:${envString}"
        // npm command: 'migrate:dev'
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