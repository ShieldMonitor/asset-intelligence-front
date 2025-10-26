pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies..."
                sh 'npm ci'
            }
        }

        stage('Run Dev Server') {
            steps {
                echo "Starting Vite development server..."
                // Kill any previously running instance (optional safeguard)
                sh '''
                pkill -f "vite" || true
                npm run dev -- --host
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Vite dev server started successfully!'
        }
        failure {
            echo '❌ Failed to start Vite dev server.'
        }
    }
}

