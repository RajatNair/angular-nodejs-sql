import { Injectable } from '@angular/core';
import { Customer } from '../models/customers.model';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../shared/configuration/common.service';
import { Addresses } from '../models/addresses.model';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    const customerEndpoint: string =
      CommonService.SERVER_URL + '/api/v1/customers';
    return this.http.get<Customer[]>(customerEndpoint);
  }

  getCustomer(customerId: number) {
    const customerDetailsEndpoint: string =
      CommonService.SERVER_URL + `/api/v1/customers/${customerId}`;
    return this.http.get<Customer>(customerDetailsEndpoint);
  }

  getCustomerAddresses(customerId: number) {
    const customerAddressesEndpoint: string =
      CommonService.SERVER_URL + `/api/v1/customers/${customerId}/addresses`;
    return this.http.get<Addresses[]>(customerAddressesEndpoint);
  }
}
