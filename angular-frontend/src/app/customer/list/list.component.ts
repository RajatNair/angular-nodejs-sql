import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Subscription } from 'rxjs';
import { Customer } from '../models/customers.model';
import { Addresses } from '../models/addresses.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit, OnDestroy {
  private customerSubscription: Subscription;
  private addressesSubscription: Subscription;
  customers: Customer[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    // Fetch data from API
    this.getListOfCustomers();
  }

  getListOfCustomers() {
    this.customerSubscription = this.customersService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onCustomerSelect(customer: Customer): void {
    this.addressesSubscription = this.customersService
      .getCustomerAddresses(customer.Id)
      .subscribe(
        (response: Addresses[]) => {
          // Display if there are addresses for customer
          if (response && response.length > 0) {
            customer.Addresses = response;
            customer.Collapse = !customer.Collapse;
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  onAddressSelect(customer: Customer): void {
    customer.Collapse = !customer.Collapse;
  }

  ngOnDestroy() {
    if (this.customerSubscription) {
      this.customerSubscription.unsubscribe();
    }
    if (this.addressesSubscription) {
      this.addressesSubscription.unsubscribe();
    }
  }
}
