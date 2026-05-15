FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# EXPOSE should come before CMD (convention)
EXPOSE 4000
CMD [ "node","server.js" ]
