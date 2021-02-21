# Prerequisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

# Getting started

1. Clone this repo
2. Start docker-compose

```console
$ docker-compose up -d
```

3. Create the `todo` table in [hasura console](http://localhost:8080/console)

| Column name  | type                         | default |
| ------------ | ---------------------------- | ------- |
| id           | from frequently used columns |         |
| created_at   | from frequently used columns |         |
| title        | text                         |         |
| is_completed | boolean                      | false   |

4. Start frontend

```console
$ cd frontend
$ yarn run start
```

To start codegen into watch mond:

```console
$ yarn run generate --watch
```

## Useful commands

Head to <http://localhost:8080/console> to open the Hasura console.
