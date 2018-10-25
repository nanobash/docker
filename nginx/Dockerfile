FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf

RUN set -x \
    apt-get -f install && \
    apt-get autoremove && \
    apt-get clean all && \
    apt-get update

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]

EXPOSE 80 443
