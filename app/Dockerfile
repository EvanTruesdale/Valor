FROM node:18.8.0

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

COPY . .
RUN npm run build
CMD [ "node", "index.js" ]