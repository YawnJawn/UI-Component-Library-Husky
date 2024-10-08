# Use an official Node.js runtime as a parent image
FROM node:18

# Create and set working directory
WORKDIR /Tran_Tin_ui_garden__build_checks

# Install dependencies
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port Storybook will run on
EXPOSE 8018

# Command to start Storybook
CMD ["yarn", "storybook", "dev", "-p", "8018", "--no-open"]
