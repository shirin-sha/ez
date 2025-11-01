#!/bin/sh
set -e

# Function to handle shutdown
cleanup() {
    echo "Shutting down..."
    kill $EXPRESS_PID 2>/dev/null || true
    exit 0
}

# Trap SIGTERM and SIGINT
trap cleanup SIGTERM SIGINT

# Start Express server in background
echo "Starting Express server..."
node server/index.js &
EXPRESS_PID=$!

# Give Express a moment to start
sleep 3

# Check if Express started successfully
if ! kill -0 $EXPRESS_PID 2>/dev/null; then
    echo "Express server failed to start!"
    exit 1
fi

echo "Starting Nginx..."
# Start Nginx in foreground
nginx -g "daemon off;"
