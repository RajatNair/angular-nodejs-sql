import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CustomersService } from './customers.service';
import { Customer } from '../models/customers.model';
import { Addresses } from '../models/addresses.model';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpMock: HttpTestingController;
  const dummyCustomerData: Customer[] = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomersService],
    });
    service = TestBed.inject(CustomersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const customersService: CustomersService = TestBed.inject(CustomersService);
    expect(customersService).toBeTruthy();
  });


});
