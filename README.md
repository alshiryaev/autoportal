-- Общие сведения

Команда для построения и запуска контейнера:
docker build -t autoportal . && docker run -p 80:80 -p 443:443 -v `pwd`:/www/ --name nginx-nest-react autoportal

-- Настройка БД

Для работы необходимо создать БД, например autoportal 
Все данные необходимыед для работы с базой данных должны
указываться в файле ormconfig.env

Пример конфига

TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = postgres
TYPEORM_PASSWORD = 12345
TYPEORM_DATABASE = autoportal
TYPEORM_PORT = 5432
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = false
TYPEORM_MIGRATIONS=dist/server/database/migrations/*.js
TYPEORM_MIGRATIONS_DIR=./src/server/database/migrations
TYPEORM_ENTITIES=dist/server/database/entities/*.entity.js
TYPEORM_ENTITIES_DIR=./src/server/database/entities

Ключи TYPEORM_MIGRATIONS, TYPEORM_MIGRATIONS_DIR, TYPEORM_ENTITIES, TYPEORM_ENTITIES_DIR
должны быть такие же как укзааны в примере

Для создания структуры БД необходимо запустить миграции
npm run typeorm migration:run

Откад БД на одну миграцию 
npm run typeorm migration:revert
