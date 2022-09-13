FROM node:18.8.0

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

COPY . .
ARG REACT_APP_SERVER_CONTAINER_PORT
ENV REACT_APP_SERVER_CONTAINER_PORT=$REACT_APP_SERVER_CONTAINER_PORT
RUN npm run build
CMD [ "node", "index.js" ]