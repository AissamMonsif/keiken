# Stage 1: Build the Angular application
FROM node:18.13 as build

# Set the working directory
WORKDIR /project

# Install Angular CLI
RUN npm install -g @angular/cli@13

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application
CMD [ "npm", "run", "start" ]
EXPOSE 4200
