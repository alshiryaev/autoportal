Команда для построения и запуска контейнера:
docker build -t autoportal . && docker run -p 80:80 -p 443:443 -v `pwd`:/www/ --name nginx-nest-react autoportal