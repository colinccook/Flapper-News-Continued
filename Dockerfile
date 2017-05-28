# Source container
FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
copy package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Environment variables
ENV SECRET secret
ENV MONGODB mongodb://:27017/news

# Accessible from 3000 (default port on Express.js)
EXPOSE 3000

# Start
CMD [ "npm", "start" ]