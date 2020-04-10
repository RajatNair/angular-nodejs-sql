import { Customer } from "../entity/Customer";

export class Seed {
  constructor() {}

  static async generateSeedData(connection) {
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
  }
}
