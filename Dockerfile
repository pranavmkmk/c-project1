FROM ubuntu:20.04
RUN apt update && apt install nginx -y
#ADD nginxconf /etc/nginx/sites-available/
ADD ./frontend /var/www/html/ 
ENTRYPOINT ["nginx","-g","daemon off;"]


