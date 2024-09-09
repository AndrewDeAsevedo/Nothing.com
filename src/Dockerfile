# Stage 1: Build the frontend
FROM node:18-alpine AS build-frontend
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production-frontend
WORKDIR /app

# Copy only the built files from the build-frontend stage
COPY --from=build-frontend /app/dist ./build

# Start the application (if necessary, depends on how your app is structured)
CMD ["node", "build"]
