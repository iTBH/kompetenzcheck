FROM collaborating.tuhh.de:5005/itbh/kompetenzcheck/docker:latest

# Copy project to /var/www/html
WORKDIR /var/www/html
COPY . /var/www/html

RUN chmod +x /var/www/html/entrypoint.sh
RUN chmod +x /var/www/html/wait-for-it.sh

RUN su -s /bin/bash -c 'npm install && npm run dev && npm cache clean && composer install' www-data
#USER www-data
#RUN npm install \
#	&& npm run dev \
#	&& npm cache clean \
#	&& composer install

EXPOSE 80

ENTRYPOINT /var/www/html/entrypoint.sh
