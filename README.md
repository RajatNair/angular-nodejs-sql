# A sample frontend on Angular 9 with REST API backend on NodeJS and Sqlite

### [Angular Frontend](./angular-frontend)

Built using Angular 9.1.1, Typescript, ~~Akita~~, Bootstrap, Rxjs, Webpack

- Setup the project based on instructions in the README.MD
- Build project using `npm run release-build`
- Package project into Docker image

### [NodeJS Backend](./nodejs-backend)

Built using NodeJS, Typescript, TypeORM, Express, SQLite

- Setup the project based on instructions in the README.MD
- Build and package project into Docker image

### [E2E Testing](./testing-e2e)

Built using Cypress, Typescript, Webpack

- Setup the project based on instructions in the README.MD

### Docker Compose

Once you build the individual Docker images, use the `docker-compose.yaml` file to deploy them `docker-compose up -d`
