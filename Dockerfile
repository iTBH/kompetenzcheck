FROM php:7.1-fpm

# Install php extensions
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
	&& apt-get update \
	&& apt-get install -y --no-install-recommends nodejs zip unzip libpng12-dev libmcrypt-dev libxml2-dev libfreetype6-dev libjpeg62-turbo-dev git \
	&& docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-install -j$(nproc) pdo_mysql gd mcrypt opcache \
	&& rm -rf /var/lib/apt/lists/*

# Install composer
RUN curl -o /usr/local/bin/composer https://getcomposer.org/composer.phar && chmod +x /usr/local/bin/composer && composer global require hirak/prestissimo

RUN curl --silent --show-error --fail --location \
      --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
      "https://caddyserver.com/download/linux/amd64?license=personal" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy \
 	&& chmod 0755 /usr/bin/caddy

RUN npm install -g webpack cross-env laravel-mix gulp

# Copy project to /var/www/html
WORKDIR /var/www/html
COPY . /var/www/html

# Install webpack
RUN npm install \
	&& npm run dev \
	&& npm cache clean \
	&& composer install

RUN chown -R www-data:www-data /var/www/html
RUN chmod +x /var/www/html/entrypoint.sh
RUN chmod +x /var/www/html/wait-for-it.sh

EXPOSE 80

ENTRYPOINT /var/www/html/entrypoint.sh
