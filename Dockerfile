# Dockerfile
# node doesn't have to be this version
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]