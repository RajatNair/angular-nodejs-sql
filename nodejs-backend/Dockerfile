FROM node:12.16.2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

# Execute entrypoint
CMD [ "node", "node_modules/ts-node/dist/_bin.js","src/index.ts" ]