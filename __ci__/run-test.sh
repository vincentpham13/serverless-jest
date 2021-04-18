#!bin/bash

# Fail on error
set -e

echo "Installing Dependencies"
npm install

echo "Performing unit test"
npm test