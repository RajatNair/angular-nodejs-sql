import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Customer } from "../entity/Customer";
import { Logging } from "../utility/logging";

export class CustomerController {
  private customerRepository = getRepository(Customer);
  private logger;
  constructor() {
    const logSetup = new Logging("CustomerController");
    this.logger = logSetup.logger;
  }

  async all(request: Request, response: Response, next: NextFunction) {
    this.logger.debug("Fetch all customer data");
    return this.customerRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.customerRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.customerRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.customerRepository.findOne(request.params.id);
    await this.customerRepository.remove(userToRemove);
  }
}
