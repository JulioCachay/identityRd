
FROM node:latest as node
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:latest

COPY --from=node /app/dist/spa-ui /usr/share/nginx/html
# COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
