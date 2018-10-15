FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

RUN set -x \
    apt-get -f install && \
    apt-get autoremove && \
    apt-get clean all && \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y htop \
                       net-tools

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]

EXPOSE 80 443
