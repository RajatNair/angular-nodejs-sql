import "reflect-metadata";
import { createConnection, AdvancedConsoleLogger } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Seed } from "./seed/seed";
import { Logging } from "./utility/logging";

let logger;
createConnection()
  .then(async (connection) => {
    // Create express app
    const app = express();
    app.use(bodyParser.json());

    // Logging
    const logSetup = new Logging("createConnection");
    this.logger = logSetup.logger;

    // Register express routes from defined application routes
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

    // start express server
    app.listen(3000);

    // Generate seed data for testing
    // Seed.generateSeedData(connection);

    this.logger.info(
      "Express server has started on port 3000. Open http://localhost:3000/api/customers to see results"
    );
  })
  .catch((error) => {
    this.logger.error(error);
  });
