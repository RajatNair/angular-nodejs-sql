import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomersService } from './customers.service';
import { Customer } from '../models/customers.model';
import { Addresses } from '../models/addresses.model';
import { of } from 'rxjs';
import { CommonService } from 'src/app/shared/configuration/common.service';
import { Address } from 'cluster';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const getCustomersEndpoint = CommonService.SERVER_URL + '/api/v1/customers';
  const getCustomerEndpoint = CommonService.SERVER_URL + '/api/v1/customers/1';
  const getAddressesEndpoint =
    CommonService.SERVER_URL + '/api/v1/customers/2/addresses';
  const dummyCustomersData: Customer[] = [
    {
      Id: 1,
      Name: 'Morissa Applegate',
      Age: 29,
      Sex: 'Female',
      Addresses: [],
      Collapse: true,
    },
    {
      Id: 2,
      Name: 'Bradan Milbourne',
      Age: 43,
      Sex: 'Male',
      Addresses: [],
      Collapse: true,
    },
  ];

  const dummyCustomerData: Customer = {
    Id: 1,
    Name: 'Morissa Applegate',
    Age: 29,
    Sex: 'Female',
    Addresses: [],
    Collapse: true,
  };

  const dummyCustomerAddresses: Addresses[] = [
    { Id: 2, Address: '8 Dennis Drive', CustomerId: 2 },
    { Id: 55, Address: '41 Lukken Drive', CustomerId: 2 },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomersService],
    });

    service = TestBed.inject(CustomersService);
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    const customersService: CustomersService = TestBed.inject(CustomersService);
    expect(customersService).toBeTruthy();
  });

  //
  // Get Customers
  //

  it('should return expected Customers (called once)', () => {
    service
      .getCustomers()
      .subscribe(
        (data) =>
          expect(data).toEqual(
            dummyCustomersData,
            'should return expected Customers information'
          ),
        fail
      );

    // CustomersService should have made one request to GET Customers from expected URL
    const req = httpTestingController.expectOne(getCustomersEndpoint);
    expect(req.request.method).toEqual('GET');

    // Respond with the mock Customers
    req.flush(dummyCustomersData);
  });

  it('should be OK returning no Customers', () => {
    service
      .getCustomers()
      .subscribe(
        (data) =>
          expect(data.length).toEqual(0, 'should have empty Customers array'),
        fail
      );

    const req = httpTestingController.expectOne(getCustomersEndpoint);
    req.flush([]); // Respond with no Customers
  });

  // This service reports the error but finds a way to let the app keep going.
  it('should turn 404 into an empty Customers result', () => {
    service
      .getCustomers()
      .subscribe(
        (data) =>
          expect(data.length).toEqual(0, 'should return empty customers array'),
        fail
      );

    const req = httpTestingController.expectOne(getCustomersEndpoint);

    // respond with a 404 and the error message in the body
    const msg = 'deliberate 404 error';
    req.flush(msg, { status: 404, statusText: 'Not Found' });
  });

  it('should return expected Customers (called multiple times)', () => {
    service.getCustomers().subscribe();
    service.getCustomers().subscribe();
    service
      .getCustomers()
      .subscribe(
        (data) =>
          expect(data).toEqual(
            dummyCustomersData,
            'should return expected customers'
          ),
        fail
      );

    const requests = httpTestingController.match(getCustomersEndpoint);
    expect(requests.length).toEqual(3, 'calls to getCustomers()');

    // Respond to each request with different mock Customers results
    requests[0].flush([]);
    requests[1].flush([dummyCustomerData]);
    requests[2].flush(dummyCustomersData);
  });

  //
  // Get Customer
  //

  it('should return expected Customer (called once)', () => {
    service
      .getCustomer(1)
      .subscribe(
        (data) =>
          expect(data).toEqual(
            dummyCustomerData,
            'should return expected Customer information'
          ),
        fail
      );

    // CustomersService should have made one request to GET Customer from expected URL
    const req = httpTestingController.expectOne(getCustomerEndpoint);
    expect(req.request.method).toEqual('GET');

    // Respond with the mock Customer
    req.flush(dummyCustomerData);
  });

  it('should be OK returning no Customer', () => {
    service
      .getCustomer(1)
      .subscribe(
        (data) => expect(data).toEqual([], 'should have empty Customer'),
        fail
      );

    const req = httpTestingController.expectOne(getCustomerEndpoint);
    req.flush([]); // Respond with no Customer
  });

  // This service reports the error but finds a way to let the app keep going.
  it('should turn 404 into an empty Customer result', () => {
    service
      .getCustomer(1)
      .subscribe(
        (data) => expect(data).toEqual({}, 'should return empty customer'),
        fail
      );

    const req = httpTestingController.expectOne(getCustomerEndpoint);

    // respond with a 404 and the error message in the body
    const msg = 'deliberate 404 error';
    req.flush(msg, { status: 404, statusText: 'Not Found' });
  });

  it('should return expected Customer (called multiple times)', () => {
    service.getCustomer(1).subscribe();
    service.getCustomer(1).subscribe();
    service
      .getCustomer(1)
      .subscribe(
        (data) =>
          expect(data).toEqual(
            dummyCustomerData,
            'should return expected customer'
          ),
        fail
      );

    const requests = httpTestingController.match(getCustomerEndpoint);
    expect(requests.length).toEqual(3, 'calls to getCustomer()');

    // Respond to each request with different mock Customer results
    requests[0].flush({});
    requests[1].flush(dummyCustomersData[1]);
    requests[2].flush(dummyCustomerData);
  });

  //
  // Get Addresses
  //

  it('should return expected Addresses (called once)', () => {
    service
      .getCustomerAddresses(2)
      .subscribe(
        (data) =>
          expect(data).toEqual(
            dummyCustomerAddresses,
            'should return expected Addresses information'
          ),
        fail
      );

    // CustomersService should have made one request to GET Addresses from expected URL
    const req = httpTestingController.expectOne(getAddressesEndpoint);
    expect(req.request.method).toEqual('GET');

    // Respond with the mock Addresses
    req.flush(dummyCustomerAddresses);
  });

  it('should be OK returning no Addresses', () => {
    service
      .getCustomerAddresses(2)
      .subscribe(
        (data) =>
          expect(data.length).toEqual(0, 'should have empty Addresses array'),
        fail
      );

    const req = httpTestingController.expectOne(getAddressesEndpoint);
    req.flush([]); // Respond with no Addresses
  });

  // This service reports the error but finds a way to let the app keep going.
  it('should turn 404 into an empty Addresses result', () => {
    service
      .getCustomerAddresses(2)
      .subscribe(
        (data) =>
          expect(data.length).toEqual(0, 'should return empty addresses array'),
        fail
      );

    const req = httpTestingController.expectOne(getAddressesEndpoint);

    // respond with a 404 and the error message in the body
    const msg = 'deliberate 404 error';
    req.flush(msg, { status: 404, statusText: 'Not Found' });
  });

  it('should return expected Addresses (called multiple times)', () => {
    service.getCustomerAddresses(2).subscribe();
    service.getCustomerAddresses(2).subscribe();
    service
      .getCustomerAddresses(2)
      .subscribe(
        (data) =>
          expect(data).toEqual(
            dummyCustomerAddresses,
            'should return expected addresses'
          ),
        fail
      );

    const requests = httpTestingController.match(getAddressesEndpoint);
    expect(requests.length).toEqual(3, 'calls to getCustomerAddresses()');

    // Respond to each request with different mock Addresses results
    requests[0].flush([]);
    requests[1].flush([dummyCustomerAddresses[1]]);
    requests[2].flush(dummyCustomerAddresses);
  });
});
