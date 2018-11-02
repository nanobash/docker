FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf

COPY certs/live.test.crt /etc/nginx/certs/live.test.crt
COPY certs/live.test.key /etc/nginx/certs/live.test.key

ARG NGINX_DEFAULT=default.conf
ARG NGINX_SYMFONY=symfony.conf

COPY sites/${NGINX_DEFAULT} /etc/nginx/conf.d/${NGINX_DEFAULT}
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
