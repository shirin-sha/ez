# Multi-stage build for React + Express app

# Stage 1: Build React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Install Nginx for serving React app
RUN apk add --no-cache nginx

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy server files
COPY server ./server

# Copy built React app from builder
COPY --from=builder /app/build ./public

# Copy nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
