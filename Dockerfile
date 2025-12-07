FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Create production stage
FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["npm", "start"]

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json .
RUN npm ci --only=production
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["npm", "start"]