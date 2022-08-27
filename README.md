# NodeJS Auth REST API example with Express, Mysql, and JWT

https://github.com/desirekaleba/node-mysql-jwt-auth

## Features

1. User can sign up
2. User can sign in

## API endpoints

1. `POST /api/auth/signup`: Creates a new user
2. `POST /api/auth/signin`: Logs in a user

## Body Payload Specification

Signup expects

```js
{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
```

Signin expects

```js
{
    email: string,
    password: string
}
```

## Tools

- NodeJS/Express: Server
- MySQL: Storage
- JWT: Token based authentication
- bcryptjs: Password security
- winston/morgan: Logs
- Joi: Validations

## Available scripts

- `start`: Starts the server with node
- `start:dev`: Starts the server in watch mode
- `db:up`: Creates the database
- `db:down`: Drops the database
- `tables:up`: Creates database tables
- `db:init`: Creates both the database and tables

## Getting started

Rename the file named `.env.example` to `.env` and update the variable values with valid ones

Install the required dependencies with

```sh
yarn install
```

Initialize the database with

```sh
yarn run db:init
```

Start the app with

```sh
yarn start
```

You can also start it in watch mode with

```sh
yarn run start:dev
```

## Folder structure

```sh
.
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── app.js
    ├── config
    │   ├── db.config.init.js
    │   └── db.config.js
    ├── controllers
    │   └── auth.controller.js
    ├── database
    │   ├── queries.js
    │   └── scripts
    │       ├── dbDown.js
    │       ├── dbUp.js
    │       └── tablesUp.js
    ├── index.js
    ├── middlewares
    │   ├── asyncHandler.js
    │   ├── checkEmail.js
    │   └── validatorHandler.js
    ├── models
    │   └── user.model.js
    ├── routes
    │   └── auth.route.js
    ├── utils
    │   ├── logger.js
    │   ├── password.js
    │   ├── secrets.js
    │   └── token.js
    └── validators
        └── auth.js
```
