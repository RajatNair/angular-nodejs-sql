import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Seed } from "./seed/seed";
import { Logging } from "./utility/logging";
import { Config } from "./utility/config";

let logger;
createConnection()
  .then(async (connection) => {
    // Create express app
    const app = express();
    app.use(bodyParser.json());

    // Configuration
    const config = Config.getValuesFromFile(process.env.NODE_ENV);

    // Logging
    const logSetup = new Logging("createConnection", config.log_path);
    this.logger = logSetup.logger;
    
    this.logger.info("Node Environment Config - " + process.env.NODE_ENV);
    this.logger.info("Port Config - " + config.port);
    this.logger.info("CORS Whitelist Config - " + config.CORS_whitelist);

    // CORS
    const cors = require("cors");
    const corsOptions = Config.getCORConfig(config.CORS_whitelist);

    // Register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        cors(corsOptions),
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

    // start express server
    app.listen(config.port);

    // Generate seed data for testing
    if (config.seed_data) {
      Seed.generateSeedData(connection);
    }

    this.logger.info(
      "Express server has started on port " +
        config.port +
        ". Open http://localhost:" +
        config.port +
        "/api/v1/customers to see results"
    );
  })
  .catch((error) => {
    this.logger.error(error);
  });
