#!/bin/sh
/var/www/html/wait-for-it.sh db:3306 -t 60

# Laravel soll seinen Logger dazu bringen, nach STDOUT zu loggen
# am besten per Konfiguration im `docker-compose.yml`
#touch /var/www/html/storage/laravel.log
#ln -sfT /dev/stdout /var/www/html/storage/logs/laravel.log;

if [ ! -f /var/www/html/.env ]; then
    touch /var/www/html/.env
    echo "APP_KEY=" >> /var/www/html/.env
    echo "APP_URL=${APP_URL}" >> /var/www/html/.env
    echo "APP_DEBUG=${APP_DEBUG}" >> /var/www/html/.env
    echo "APP_ENV=${APP_ENV}" >> /var/www/html/.env
    echo "APP_LOG_LEVEL=${APP_LOG_LEVEL}" >> /var/www/html/.env
    echo "ADMIN_EMAIL=${ADMIN_EMAIL}" >> /var/www/html/.env
    echo "ADMIN_PASSWORD=${ADMIN_PASSWORD}" >> /var/www/html/.env
    echo "ADMIN_USERNAME=${ADMIN_USERNAME}" >> /var/www/html/.env
fi


php artisan key:generate
php artisan storage:link
php artisan migrate
php artisan db:seed
php artisan cache:clear
php artisan view:clear


find /var/www/html/ ! -user www-data -exec chown www-data:www-data {} \;

php-fpm &
caddy
