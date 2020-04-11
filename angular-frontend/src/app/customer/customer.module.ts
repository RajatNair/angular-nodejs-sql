import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddressComponent } from './address/address.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

const customerRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'customer', component: ListComponent },
      { path: '', component: ListComponent },
    ],
  },
];

@NgModule({
  declarations: [ListComponent, AddressComponent],
  imports: [CommonModule, RouterModule.forChild(customerRoutes), NgbCollapseModule],
  exports: [RouterModule],
})
export class CustomerModule {}
