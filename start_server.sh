docker run --rm --name api-nginx -v `pwd`:/usr/share/nginx/html:ro -v `pwd`/conf.d:/etc/nginx/conf.d -p 81:80 -d nginx
