import { Customer } from './customers.model';

describe('Customers', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
