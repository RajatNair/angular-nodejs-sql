import { Customer } from './customers.model';

describe('Customers', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });

  it('get Addresses and Collapse property of Customer instance', () => {
    const dummyCustomerData: Customer = {
      Id: 1,
      Name: 'Morissa Applegate',
      Age: 29,
      Sex: 'Female',
      Addresses: [{ Id: 2, Address: '8 Dennis Drive', CustomerId: 2 }],
      Collapse: true,
    };
    expect(dummyCustomerData.Addresses[0].Address).toEqual(
      '8 Dennis Drive',
      'should return expected Customer address'
    );
    expect(dummyCustomerData.Collapse).toEqual(true,
      'should return expected Customer property'
    );
  });
});
