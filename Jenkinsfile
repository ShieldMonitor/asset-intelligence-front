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
                nohup npm run dev -- --host > vite.log 2>&1 &
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

