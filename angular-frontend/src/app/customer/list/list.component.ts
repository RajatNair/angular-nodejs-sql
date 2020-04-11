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
  private subscription: Subscription;
  customers: Customer[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    // Fetch data from API
    this.getListOfCustomers();
  }

  getListOfCustomers() {
    this.subscription = this.customersService.getCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onCustomerSelect(customer: Customer): void {
    this.customersService.getCustomerAddresses(customer.Id).subscribe(
      (data: Addresses[]) => {
        customer.Addresses = data;
        customer.Collapse = !customer.Collapse;
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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
