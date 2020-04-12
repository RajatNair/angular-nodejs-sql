import { CustomerController } from "./controller/CustomerController";
import { AddressController } from "./controller/AddressController";

export const Routes = [
  {
    method: "get",
    route: "/api/v1/customers",
    controller: CustomerController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/v1/customers/:id",
    controller: CustomerController,
    action: "one",
  },
  {
    method: "get",
    route: "/api/v1/customers/:id/addresses",
    controller: AddressController,
    action: "ids",
  },
  // Allow after implementation of authentication
  // {
  //   method: "post",
  //   route: "/api/v1/customers",
  //   controller: CustomerController,
  //   action: "save",
  // },
  // {
  //   method: "delete",
  //   route: "/api/v1/customers/:id",
  //   controller: CustomerController,
  //   action: "remove",
  // },
];
