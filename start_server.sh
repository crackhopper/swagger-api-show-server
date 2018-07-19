docker run --restart=always --name api-nginx \
  -v `pwd`:/usr/share/nginx/html:ro \
  -v `pwd`/nginx.conf:/etc/nginx/nginx.conf \
  -v `pwd`/conf.d:/etc/nginx/conf.d \
  -p 81:80 -d nginx
