import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Customer } from "./entity/Customer";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new customers for test
    await connection.manager.save(
      connection.manager.create(Customer, {
        Name: "Timber Saw",
        Age: 27,
        Sex: "Male",
      })
    );
    await connection.manager.save(
      connection.manager.create(Customer, {
        Name: "Phantom Assassin",
        Age: 24,
        Sex: "Male",
      })
    );

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/api/customers to see results"
    );
  })
  .catch((error) => console.log(error));
