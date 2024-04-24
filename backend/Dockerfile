# Use Node.js base image
FROM node:18.16-bullseye

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


RUN npm install -g pnpm

# Install dependencies
RUN pnpm install
RUN pnpm install ts-node
RUN pnpm install typeorm
# Copy the rest of the application code
COPY . .

# Copy the .env and .env.development files
COPY .env ./

RUN npm run build

# Expose the port your app runs on
EXPOSE 7000

# Command to run your application



CMD ["npm", "run", "start:prod"]
