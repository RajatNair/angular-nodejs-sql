# REST API service built on Express and TypeORM

Steps to run this project:

1. Run `npm ci` command
2. Setup database settings inside `ormconfig.json` file
3. Database seed files inside `\seed` folder
4. Rolling log files inside `\log` folder
5. Configuration files inside `\config` folder
6. Run `npm run dev` command for live reload development

### Production Docker Build

Docker build command -

```sh
docker build -t aunlead/nodejs-backend:1.0.0 .
```

Docker run command -

```sh
docker run -p 29160:8080 -d --name testing-backend aunlead/nodejs-backend:1.0.0
```

### REST API Endpoints

- To list all customers - `/api/v1/customers`
- To fetch specific customer details - `/api/v1/customers/:customer-id`
- To fetch all addresses of a specific customer - `/api/v1/customers/:customer-id/addresses`

### Database Schema

```sql
CREATE TABLE Customer (
	Id INT PRIMARY KEY,
	Name VARCHAR(50) NOT NULL,
	Age INT NOT NULL,
	Sex VARCHAR(6) NOT NULL
)
```

```sql
CREATE TABLE Address (
	Id INT PRIMARY KEY,
	Address VARCHAR(500) NOT NULL,
	CustomerId INT  NOT NULL,
	FOREIGN KEY (CustomerId)
       REFERENCES Customer (id)
)
```

### Courtesy

Mock data from [mockaroo](https://www.mockaroo.com)
