FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf

COPY sites/live.conf /etc/nginx/conf.d/live.conf

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
