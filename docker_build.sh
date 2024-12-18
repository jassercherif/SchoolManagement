#!/bin/bash

# Define image versions
SERVER_IMAGE="spring-boot-app"
CLIENT_IMAGE="react-app"

echo "Starting build and push process..."

# Build and push server image
echo "Building server image..."
cd schoolmanagementback || exit 1
docker build -t $SERVER_IMAGE .
if [ $? -ne 0 ]; then
  echo "Server image build failed"
  exit 1
fi
cd ..


# Build and push client image
echo "Building client image..."
cd schoolmanagementfront || exit 1
docker build -t $CLIENT_IMAGE .
if [ $? -ne 0 ]; then
  echo "Client image build failed"
  exit 1
fi


echo "Build process completed successfully!"
