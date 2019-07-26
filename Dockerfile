ARG BASE_IMAGE=itbh/kompetenzcheck-docker-base:latest

FROM ${BASE_IMAGE}
FROM node:6

RUN wget https://raw.githubusercontent.com/composer/getcomposer.org/1b137f8bf6db3e79a38a5bc45324414a6b1f9df2/web/installer -O - -q

# Copy project to /var/www/html
WORKDIR /var/www/html
COPY . /var/www/html

RUN chmod +x /var/www/html/entrypoint.sh
RUN chmod +x /var/www/html/wait-for-it.sh

RUN npm install \
	&& npm run dev \
	&& npm cache clean \
	&& /usr/local/bin/composer install
	
RUN chown -R www-data:www-data /var/www/html

RUN usermod -aG tty www-data

EXPOSE 80

ENTRYPOINT /var/www/html/entrypoint.sh
