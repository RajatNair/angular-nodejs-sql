interface IAddress {
  Id: number;
  Address: string;
}

export class Addresses implements IAddress {
  Id: number;
  Address: string;
  CustomerId: number;
}
