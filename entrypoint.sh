#!/bin/sh
/var/www/html/wait-for-it.sh db:3306 -t 60

#touch /var/www/html/storage/laravel.log
ln -sfT /dev/stdout /var/www/html/storage/laravel.log;

if [ ! -f /var/www/html/.env ]; then
    touch /var/www/html/.env
    echo "APP_KEY=" >> /var/www/html/.env
    echo "APP_URL=${APP_URL}" >> /var/www/html/.env
fi

# `/var/www/html/storage/app/public/` ist ein Verzeichnis, welches beim Starten
# des Containers in den Container "gemountet" wird. Die Berechtigungen für
# dieses Verzeichnis müssen korrigiert werden
chown -R www-data:www-data /var/www/html

php artisan key:generate
php artisan storage:link
php artisan migrate
php artisan db:seed

php-fpm &
caddy
