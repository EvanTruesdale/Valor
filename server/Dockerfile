FROM node:18.8.0

WORKDIR /server
COPY package.json package-lock.json ./
RUN npm i

COPY . .
CMD [ "node","index.js" ]