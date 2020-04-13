import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush,
  resetFakeAsyncZone,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListComponent } from './list.component';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/customers.model';
import { Addresses } from '../models/addresses.model';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let customersService: CustomersService;

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

  const dummyCustomerDataOnClick: Customer = {
    Id: 1,
    Name: 'Morissa Applegate',
    Age: 29,
    Sex: 'Female',
    Addresses: [],
    Collapse: false,
  };

  const dummyCustomerAddresses: Addresses[] = [
    { Id: 2, Address: '8 Dennis Drive', CustomerId: 2 },
    { Id: 55, Address: '41 Lukken Drive', CustomerId: 2 },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    customersService = TestBed.inject(CustomersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    resetFakeAsyncZone();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getListOfCustomers API', fakeAsync(() => {
    spyOn(component, 'getListOfCustomers');
    component.ngOnInit();
    tick();
    expect(component.getListOfCustomers).toHaveBeenCalled();
  }));

  it('should call getCustomers API', fakeAsync(() => {
    spyOn(customersService, 'getCustomers').and.callFake(() => {
      return of(dummyCustomersData);
    });
    component.ngOnInit();
    tick();
    expect(customersService.getCustomers).toHaveBeenCalled();
    flush();
  }));

  it('call onCustomerSelect when not collapsed', fakeAsync(() => {
    spyOn(customersService, 'getCustomerAddresses').and.callFake(() => {
      return of(dummyCustomerAddresses);
    });
    component.onCustomerSelect(dummyCustomerData);
    tick();
    expect(customersService.getCustomerAddresses).toHaveBeenCalledTimes(0);
    flush();
  }));

  it('call onCustomerSelect when collapsed', fakeAsync(() => {
    spyOn(customersService, 'getCustomerAddresses').and.callFake(() => {
      return of(dummyCustomerAddresses);
    });
    component.onCustomerSelect(dummyCustomerDataOnClick);
    tick();
    expect(customersService.getCustomerAddresses).toHaveBeenCalled();
    expect(dummyCustomerDataOnClick.Addresses).toBeDefined();
    expect(dummyCustomerDataOnClick.Addresses.length).toBe(
      2,
      'should contain addresses'
    );
    flush();
  }));

  it('customers have no addresses', fakeAsync(() => {
    const customer: Customer = {
      Id: 1,
      Name: 'Morissa Applegate',
      Age: 29,
      Sex: 'Female',
      Addresses: [],
      Collapse: false,
    };
    spyOn(customersService, 'getCustomerAddresses').and.callFake(() => {
      return of([]);
    });
    component.onCustomerSelect(customer);
    tick();
    expect(customersService.getCustomerAddresses).toHaveBeenCalled();
    expect(customer.Addresses).toBeDefined();
    expect(customer.Addresses.length).toBe(0, 'should contain addresses');
    flush();
  }));

  it('should call onAddressSelect', fakeAsync(() => {
    const customer: Customer = {
      Id: 1,
      Name: 'Morissa Applegate',
      Age: 29,
      Sex: 'Female',
      Addresses: [],
      Collapse: false,
    };
    spyOn(component, 'onAddressSelect');
    component.onAddressSelect(customer);
    tick();
    expect(component.onAddressSelect).toHaveBeenCalled();
    expect(customer.Collapse).toBeFalse();
  }));
});
