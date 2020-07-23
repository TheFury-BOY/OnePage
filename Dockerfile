FROM alpine:latest
RUN \
    apk add --no-cache \
    apache2-proxy \
    apache2-ssl \
    apache2-utils \
    curl \
    git \
    logrotate \
    openssl

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2

WORKDIR /var/www/localhost/htdocs
COPY ./public /var/www/localhost/htdocs

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

RUN mkdir -p /run/apache2


