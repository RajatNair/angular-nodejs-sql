import { Injectable } from '@angular/core';
import { Customer } from '../models/customers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from '../../shared/configuration/common.service';
import { Addresses } from '../models/addresses.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  GlobalExceptionHandlerService,
  HandleError,
} from 'src/app/shared/exception-handler/global-exception-handler.service';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    exceptionHandler: GlobalExceptionHandlerService
  ) {
    this.handleError = exceptionHandler.createHandleError('CustomersService');
  }

  getCustomers() {
    const customerEndpoint: string =
      CommonService.SERVER_URL + '/api/v1/customers';
    return this.http
      .get<Customer[]>(customerEndpoint)
      .pipe(catchError(this.handleError('getCustomers', [])));
  }

  getCustomer(customerId: number) {
    const customerDetailsEndpoint: string =
      CommonService.SERVER_URL + `/api/v1/customers/${customerId}`;
    return this.http
      .get<Customer>(customerDetailsEndpoint)
      .pipe(catchError(this.handleError('getCustomer', {})));
  }

  getCustomerAddresses(customerId: number) {
    const customerAddressesEndpoint: string =
      CommonService.SERVER_URL + `/api/v1/customers/${customerId}/addresses`;
    return this.http
      .get<Addresses[]>(customerAddressesEndpoint)
      .pipe(catchError(this.handleError('getCustomerAddresses', [])));
  }
}
