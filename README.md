# north-one-challenge
Node.js Express API implementation of To Do List-type API challenge.
You need only docker to run this project.

## Run

With docker compose, this application is exposed on: http://localhost:8080/
Locally, this application is exposed on: http://localhost:4040/

Node.js development environment with hot reloading (see [package.json](https://github.com/Virmli/north-one-challenge/blob/main/package.json)):

```bash
npm i
npm run mongo:start
npm run dev
```

Docker environment (see [docker-compose.yml](https://github.com/Virmli/north-one-challenge/blob/main/docker-compose.yml)):

```bash
docker-compose build
docker-compose up
```

## APIS

This service exposes two apis local npm run exposes ``port:4040``, and docker run exposes ``port:8080``
For the full list of api please use Postman and NorthOne-todo-list postman collection (see [postman-collection](https://github.com/Virmli/north-one-challenge/blob/main/postman/NorthOneChallenge.postman_collection.json))
