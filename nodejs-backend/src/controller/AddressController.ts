import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Address } from "../entity/Address";

export class AddressController {
  private addressRepository = getRepository(Address);

  async ids(request: Request, response: Response, next: NextFunction) {
    return this.addressRepository.find({ emp_id: request.params.id });
    // return this.addressRepository
    //   .createQueryBuilder("Address")
    //   .where("address.id = :id", { id: request.params.id })
    //   .getMany();
  }
}
