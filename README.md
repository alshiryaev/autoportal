-- Общие сведения

Команда для построения и запуска контейнера:
docker build -t autoportal . && docker run -p 80:80 -p 443:443 -v `pwd`:/www/ --name nginx-nest-react autoportal

-- Настройка БД

Для работы необходимо создать БД, например autoportal 
Все данные необходимыед для работы с базой данных должны
указываться в файле ormconfig.env

Для создания структуры БД необходимо запустить миграции
npm run typeorm migration:run
