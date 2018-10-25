FROM php:7.2-fpm

ARG PHP_EXT_BCMATH=false
ARG PHP_EXT_CALENDAR=false
ARG PHP_EXT_CTYPE=false
ARG PHP_EXT_DBA=false
ARG PHP_EXT_DOM=false

RUN set -x \
    apt-get -f install && \
    apt-get autoremove && \
    apt-get clean all && \
    apt-get update

#RUN get_php_exts () { if [ $1 = true ]; then exts="$exts $2"; libs="$libs $3"; fi } && \
#    get_php_exts ${PHP_EXT_BCMATH} bcmath && \
#    get_php_exts ${PHP_EXT_CALENDAR} calendar && \
#    get_php_exts ${PHP_EXT_CTYPE} ctype && \
#    get_php_exts ${PHP_EXT_DBA} dba && \
#    get_php_exts ${PHP_EXT_DOM} dom libxml2-dev && \
#    apt-get install -y $libs && \
#    docker-php-ext-install -j$(nproc) $exts

ENV PHP_EXT_BCMATH=${PHP_EXT_BCMATH}
ENV PHP_EXT_CALENDAR=${PHP_EXT_CALENDAR}
ENV PHP_EXT_CTYPE=${PHP_EXT_CTYPE}
ENV PHP_EXT_DBA=${PHP_EXT_DBA}
ENV PHP_EXT_DOM=${PHP_EXT_DOM}

EXPOSE 9000
