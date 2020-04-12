import { Addresses } from './addresses.model';

interface ICustomer {
  Id: number;
  Name: string;
  Age: number;
  Sex: string;
}

export class Customer implements ICustomer {
  Id: number;
  Name: string;
  Age: number;
  Sex: string;
  private _Addresses?: Addresses[] = [];
  public get Addresses(): Addresses[] {
    return this._Addresses;
  }
  public set Addresses(v: Addresses[]) {
    this._Addresses = v;
  }

  private _collapse?: boolean = true;
  public get Collapse(): boolean {
    return this._collapse;
  }
  public set Collapse(v: boolean) {
    this._collapse = v;
  }
}
