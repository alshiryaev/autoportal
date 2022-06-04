<h1>AUTOPORTAL</h1>

A study project for a little market

Frontend - `React`

Backend - `NestJS`

Database - `Postgres`

ORM - `TypeORM`

<h4> The first launch </h4>

The database and admin tools (pgAdmin) moved to Docker

To start to use the following command:
<pre>docker-compose -f docker-compose.dev.yml up --build</pre>

The database tool pgadmin - `http://localhost:5555`
it is necessary to create a database server.
For details see <code>ormconfig.env</code> in server folder.

All the data needeed for the database connection is in ormconfig.env file
This file is in server folder.

Config example:

<pre>
TYPEORM_CONNECTION = postgres
# For a local - localhost
# If you use nginx - postgres
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

Variables `PASSWORD, USER, DATABASE` must match with the parameters in <code>docker-compose.yml</code>
Variables `TYPEORM_MIGRATIONS, TYPEORM_MIGRATIONS_DIR, TYPEORM_ENTITIES, TYPEORM_ENTITIES_DIR`
should point to specific parameters of the server application

To creation of the database tables it's necessary to run the following command:
`npm run typeorm migration:run`

To revert:
`npm run typeorm migration:revert`

Запускаем сервер командой `npm run start:dev` 
и переходим на `http://localhost:3000/swagger`

Команда для построения и запуска контейнера nginx:
<pre>
docker build -t autoportal . && docker run -p 80:80 -p 443:443 -v "pwd":/www/ --name nginx-nest-react autoportal
</pre>


