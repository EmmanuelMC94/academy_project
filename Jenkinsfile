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
    sh 'npm test || true'
    sh 'echo "Unit Test Finish"'
    
   }
  }
  
  
 
   stage('SaticAnalysis'){
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
