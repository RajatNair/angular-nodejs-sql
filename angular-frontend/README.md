# Frontend on Angular 9.1.1 for NodeJS based REST API service

Steps to run this project:

1. Run `npm ci` command
2. Set `restEndpoint` value in `src\environments\environment.ts` file to URL of your REST server
3. Run `ng serve` command for live reload development. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Production Docker Build

Docker build command -

```sh
docker build -t aunlead/angular-frontend:1.0.0 .
```

Docker run command -

```sh
docker run -p 29160:80 -d  --name testing-frontend aunlead/angular-frontend:1.0.0
```

## Build

Run `npm run release` for a production build. The build artifacts will be stored in the `dist/` directory. During production builds, code linting and unit tests have to pass or build will fail.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run test` to execute the end-to-end tests via [testing-e2e](../testing-e2e).
