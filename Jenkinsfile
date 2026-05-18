pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // If you are using npm, this installs your packages
                sh 'npm install' 
            }
        }
        stage('Run Tests') {
            steps {
                // This triggers your test suite
                sh 'npm test'
            }
        }
    }
}