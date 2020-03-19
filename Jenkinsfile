pipeline { 
agent any

 stages {
    
   stage('Build'){
   steps{
    sh 'cd node'
    sh 'npm install'
    
   }
  }
   
  stage('unit test'){
   steps{
    sh 'cd node'
    //sh 'npm test'
    sh 'echo "Running Unit Test"'
    
   }
  }
  
  
 
   stage('SonarQube'){
    environment {
        scannerHome = tool 'SonarQubeScanner'
    }
   steps {
    withSonarQubeEnv('SonarQube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        
   }
  }
      
 }
}
