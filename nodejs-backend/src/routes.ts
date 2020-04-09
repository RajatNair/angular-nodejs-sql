import { CustomerController } from "./controller/CustomerController";
import { AddressController } from "./controller/AddressController";

export const Routes = [
  {
    method: "get",
    route: "/api/customers",
    controller: CustomerController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/customers/:id",
    controller: CustomerController,
    action: "one",
  },
  {
    method: "get",
    route: "/api/customers/:id/address",
    controller: AddressController,
    action: "ids",
  },
  {
    method: "post",
    route: "/api/customers",
    controller: CustomerController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/customers/:id",
    controller: CustomerController,
    action: "remove",
  },
];
