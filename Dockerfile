# Use official Node.js 18 image with Alpine
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for optimal caching
COPY package*.json ./
COPY eslint.config.js ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build application (if needed)
# RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start application
CMD ["npm", "start"]