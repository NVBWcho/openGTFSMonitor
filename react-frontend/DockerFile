# Use Node.js for building the app
FROM node:20.10.0-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the project files to the container
COPY ./ /app

# Install the dependencies
RUN npm install

# Build the React app for production
RUN npm run build

# Use a smaller image to serve the production build
FROM node:20.10.0-alpine as serve

# Install 'serve' globally
RUN npm install -g serve

# Copy the build folder from the build stage
COPY --from=build /app/build /app/build

# Expose port 3000 to be used by 'serve'
EXPOSE 3000

# Start the app with 'serve'
CMD ["serve", "-s", "build", "-l", "3000"]




