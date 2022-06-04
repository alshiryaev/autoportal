<h1>AUTOPORTAL</h1>

Проект для учета товара магазина автозапчастей.

Фронт - `React`

Бэк - `NestJS`

БД - `Postgres`

ORM - `TypeORM`


**Первый запуск**

БД и средство администрирования БД (pgAdmin) перенесены в Docker
Для запуска БД выполняем следующую команду
<pre>docker-compose up --build</pre>

Утилита pgadmin доступна по адресу `http://localhost:5555` после запуска Docker.
Создаем сервер с БД с хостом (TYPEORM_HOST) как в файле конфигурации.

Все данные необходимые для работы с базой данных должны
указываться в файле конфигурации `ormconfig.env`, который должен находится в
корне проекта.

Пример конфига

<pre>
TYPEORM_CONNECTION = postgres
# Для локального запуска api - localhost
# Для работы через nginx - postgres
TYPEORM_HOST = postgres 
TYPEORM_USERNAME = postgres
TYPEORM_PASSWORD = postgres
TYPEORM_DATABASE = autoportal
TYPEORM_PORT = 5432
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = false
TYPEORM_MIGRATIONS=./dist/database/migrations/*.js
TYPEORM_MIGRATIONS_DIR=./dist/database/migrations
TYPEORM_ENTITIES=./dist/database/entities/*.entity.js
TYPEORM_ENTITIES_DIR=./dist/database/entities
</pre>

Параметры `PASSWORD, USER, DATABASE` должны совпадать с соответствующими параметрами из
docker-compose.yml файла.
Ключи `TYPEORM_MIGRATIONS, TYPEORM_MIGRATIONS_DIR, TYPEORM_ENTITIES, TYPEORM_ENTITIES_DIR`
должны быть такие же как укзаны в примере

Для создания структуры БД необходимо запустить миграции
`npm run typeorm migration:run`

Откат БД на одну миграцию
`npm run typeorm migration:revert`

Запускаем сервер командой `npm run start:dev` 
и переходим на `http://localhost:3000/swagger`

Команда для построения и запуска контейнера nginx:
<pre>
docker build -t autoportal . && docker run -p 80:80 -p 443:443 -v "pwd":/www/ --name nginx-nest-react autoportal
</pre>


