FROM nginx:latest
LABEL authors="alena"

COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html