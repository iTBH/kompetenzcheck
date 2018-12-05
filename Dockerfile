FROM collaborating.tuhh.de:5005/itbh/kompetenzcheck/docker:latest

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
