FROM php:8.1.0-fpm

LABEL MAINTAINER="Tornike Nanobashvili <tnanobashvili92@gmail.com>"

LABEL DESCRIPTION="Runs PHP version php:8.1.0-fpm preconfigured by .env variables"

ARG PHP_EXT_BZ2=false
ARG PHP_EXT_DOM=false
ARG PHP_EXT_GD=false
ARG PHP_EXT_GMP=false
ARG PHP_EXT_IMAP=false
ARG PHP_EXT_LDAP=false
ARG PHP_EXT_PDO_DBLIB=false
ARG PHP_EXT_PDO_ODBC=false
ARG PHP_EXT_PDO_PGSQL=false
ARG PHP_EXT_SNMP=false
ARG PHP_EXT_TIDY=false
ARG PHP_EXT_XSL=false
ARG PHP_EXT_ZIP=false

RUN set -x \
    apt-get -f install && \
    apt-get autoremove && \
    apt-get clean all && \
    apt-get update && \
    apt-get -y install libxml2-dev openssh-server supervisor && \
    mkdir /run/sshd && \
    mkdir -p /var/log/supervisor && \
    { if [ ! -d "/root/.ssh" ]; then mkdir /root/.ssh; fi } && \
    chmod 700 /root/.ssh && \
    touch /root/.ssh/authorized_keys && \
    chmod 644 /root/.ssh/authorized_keys && \
    get_lib () if [ $1 = true ]; then shift; libs="$libs $*"; fi && \
    get_lib ${PHP_EXT_BZ2} libbz2-dev && \
    get_lib ${PHP_EXT_GD} libpng-dev && \
    get_lib ${PHP_EXT_GMP} libgmp-dev && \
    get_lib ${PHP_EXT_IMAP} libc-client-dev libkrb5-dev && \
    get_lib ${PHP_EXT_LDAP} libldb-dev libldap2-dev && \
    get_lib ${PHP_EXT_PDO_DBLIB} freetds-dev && \
    get_lib ${PHP_EXT_PDO_ODBC} unixodbc-dev && \
    get_lib ${PHP_EXT_PDO_PGSQL} libpq-dev && \
    get_lib ${PHP_EXT_SNMP} libsnmp-dev snmp && \
    get_lib ${PHP_EXT_TIDY} libtidy-dev && \
    get_lib ${PHP_EXT_XSL} libxslt-dev && \
    get_lib ${PHP_EXT_ZIP} libzip-dev && \
    apt-get install -y --no-install-recommends less $libs && \
    rm -rf /var/lib/apt/lists/*

COPY xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
COPY ssh/id_rsa.pub /root/.ssh/authorized_keys
COPY supervisor/supervisor.conf /etc/supervisor/conf.d/supervisord.conf

ARG PHP_EXT_APCU=false
ARG PHP_EXT_BCMATH=false
ARG PHP_EXT_CALENDAR=false
ARG PHP_EXT_DBA=false
ARG PHP_EXT_EXIF=false
ARG PHP_EXT_FILEINFO=false
ARG PHP_EXT_GETTEXT=false
ARG PHP_EXT_INTL=false
ARG PHP_EXT_MYSQLI=false
ARG PHP_EXT_OPCACHE=false
ARG PHP_EXT_PCNTL=false
ARG PHP_EXT_PDO_MYSQL=false
ARG PHP_EXT_PGSQL=false
ARG PHP_EXT_REDIS=false
ARG PHP_EXT_SHMOP=false
ARG PHP_EXT_SOAP=false
ARG PHP_EXT_SOCKETS=false
ARG PHP_EXT_SYSCMSG=false
ARG PHP_EXT_SYSVSEM=false
ARG PHP_EXT_SYSVSHM=false
ARG PHP_EXT_XDEBUG=false

RUN get_ext () { if [ $1 = true ]; then exts="$exts $2"; fi } && \
    if [ $PHP_EXT_APCU = true ]; then \
        pecl install apcu && \
        docker-php-ext-enable apcu; \
    fi && \
    get_ext ${PHP_EXT_BCMATH} bcmath && \
    get_ext ${PHP_EXT_BZ2} bz2 && \
    get_ext ${PHP_EXT_CALENDAR} calendar && \
    get_ext ${PHP_EXT_DBA} dba && \
    get_ext ${PHP_EXT_DOM} dom && \
    get_ext ${PHP_EXT_EXIF} exif && \
    get_ext ${PHP_EXT_FILEINFO} fileinfo && \
    get_ext ${PHP_EXT_GD} gd && \
    get_ext ${PHP_EXT_GETTEXT} gettext && \
    get_ext ${PHP_EXT_GMP} gmp && \
    if [ $PHP_EXT_IMAP = true ]; then \
        docker-php-ext-configure imap --with-kerberos --with-imap-ssl; \
    fi && \
    get_ext ${PHP_EXT_INTL} intl && \
    get_ext ${PHP_EXT_IMAP} imap && \
    get_ext ${PHP_EXT_LDAP} ldap && \
    get_ext ${PHP_EXT_MYSQLI} mysqli && \
    get_ext ${PHP_EXT_OPCACHE} opcache && \
    get_ext ${PHP_EXT_PCNTL} pcntl && \
    if [ $PHP_EXT_PDO_DBLIB = true ]; then \
        ln -s $(find / -iname libsybdb.a 2>/dev/null) /usr/lib; \
    fi && \
    get_ext ${PHP_EXT_PDO_DBLIB} pdo_dblib && \
    get_ext ${PHP_EXT_PDO_MYSQL} pdo_mysql && \
    if [ $PHP_EXT_PDO_ODBC = true ]; then \
        docker-php-ext-configure pdo_odbc --with-pdo-odbc=unixODBC,/usr; \
    fi && \
    get_ext ${PHP_EXT_PDO_ODBC} pdo_odbc && \
    get_ext ${PHP_EXT_PDO_PGSQL} pdo_pgsql && \
    get_ext ${PHP_EXT_PGSQL} pgsql && \
    if [ $PHP_EXT_REDIS = true ]; then \
        pecl install redis && \
        docker-php-ext-enable redis; \
    fi && \
    get_ext ${PHP_EXT_SHMOP} shmop && \
    get_ext ${PHP_EXT_SNMP} snmp && \
    get_ext ${PHP_EXT_SOAP} soap && \
    get_ext ${PHP_EXT_SOCKETS} sockets && \
    get_ext ${PHP_EXT_SYSCMSG} sysvmsg && \
    get_ext ${PHP_EXT_SYSVSEM} sysvsem && \
    get_ext ${PHP_EXT_SYSVSHM} sysvshm && \
    get_ext ${PHP_EXT_TIDY} tidy && \
    get_ext ${PHP_EXT_XSL} xsl && \
    get_ext ${PHP_EXT_ZIP} zip && \
    if [ ! -z "$exts" ]; then docker-php-ext-install -j$(nproc) $exts; fi && \
    if [ $PHP_EXT_XDEBUG = true ]; then \
        pecl install xdebug && \
        docker-php-ext-enable xdebug; \
    fi && \
    sed -i 's/^;catch_workers_output = yes/catch_workers_output = yes/g' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/^;php_admin_flag\[log_errors\] = on/php_admin_flag[log_errors] = on/g' /usr/local/etc/php-fpm.d/www.conf && \
    echo "\nPHP ${PHP_VERSION} has been successfully installed\n" && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    echo "Composer (dependency management tool for PHP) has been successfully installed\n" && \
    curl -sS https://get.symfony.com/cli/installer | bash && \
    mv /root/.symfony5/bin/symfony /usr/local/bin/symfony && \
    curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh && \
    bash /tmp/nodesource_setup.sh && \
    rm /tmp/nodesource_setup.sh && \
    apt-get install -y nodejs && \
    echo "Node.js has been successfully installed\n" && \
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install yarn && \
    echo "Yarn (dependency management tool for Node.js) has been successfully installed\n"

RUN usermod -u 1000 www-data && \
    groupmod -g 1000 www-data

CMD ["/usr/bin/supervisord"]

EXPOSE 22 9000
