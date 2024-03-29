FROM nginx:1.21.3

LABEL MAINTAINER="Tornike Nanobashvili <tnanobashvili92@gmail.com>"

LABEL DESCRIPTION="Runs Nginx web server for vanilla PHP, Symfony and Laravel frameworks"

COPY nginx.conf /etc/nginx/nginx.conf

COPY certs/homeland.local.crt /etc/nginx/certs/homeland.local.crt
COPY certs/homeland.local.key /etc/nginx/certs/homeland.local.key

ARG NGINX_DEFAULT=default.conf
ARG NGINX_SYMFONY=symfony.conf
ARG NGINX_LARAVEL=laravel.conf

COPY sites/${NGINX_DEFAULT} /etc/nginx/conf.d/${NGINX_DEFAULT}
COPY sites/${NGINX_LARAVEL} /etc/nginx/conf.d/${NGINX_LARAVEL}
COPY sites/${NGINX_SYMFONY} /etc/nginx/conf.d/${NGINX_SYMFONY}

RUN set -x \
    apt-get -f install && \
    apt-get autoremove && \
    apt-get clean all && \
    apt-get update && \
    apt-get install -y --no-install-recommends less && \
    rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]

EXPOSE 80 443
