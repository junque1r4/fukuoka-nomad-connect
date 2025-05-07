#!/bin/bash
set -e

# Fukuoka Nomad Connect Deployment Script

echo "======================================"
echo "Fukuoka Nomad Connect Deployment"
echo "======================================"

# Check if Node.js and npm are installed
if ! command -v node > /dev/null; then
  echo "Node.js is not installed. Please install Node.js before proceeding."
  exit 1
fi

# Make script executable with: chmod +x deploy.sh

# Check if running from the correct directory
if [ ! -f "package.json" ]; then
  echo "Error: This script must be run from the project root directory."
  exit 1
fi

echo "Installing dependencies..."
npm ci

echo "Running linting checks..."
npm run lint

echo "Building the application..."
npm run build

# Deploy options below - uncomment the one you need

# Option 1: Standard Node.js server
# echo "Starting the application..."
# npm start

# Option 2: Deploy to Vercel
# echo "Deploying to Vercel..."
# npx vercel --prod

# Option 3: Deploy to Netlify
# echo "Deploying to Netlify..."
# npx netlify deploy --prod

# Option 4: Deploy to AWS Amplify
# echo "Deploying to AWS Amplify..."
# amplify publish

echo "======================================"
echo "Deployment completed successfully!"
echo "======================================"

# Additional instructions
echo "To finalize your deployment:"
echo "1. Choose a deployment option in the deploy.sh script"
echo "2. Update your environment variables if needed"
echo "3. Connect your repository to your preferred CI/CD service"
echo "======================================"