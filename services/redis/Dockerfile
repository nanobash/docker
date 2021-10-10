FROM redis:6.2

LABEL MAINTAINER="Tornike Nanobashvili <tnanobashvili92@gmail.com>"

LABEL DESCRIPTION="Redis service based on debian 11 (bullseye)"

COPY redis.conf /usr/local/etc/redis/redis.conf

CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]

CMD ["redis-server"]

EXPOSE 6379
