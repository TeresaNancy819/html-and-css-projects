interface IPurchase {
  firstName: string;
  lastName: string;
  pId: number;
  doneOrder: () => string;
}

let user: IPurchase = {
  firstName: "Teresa",
  lastName: "nancy",
  pId: 4,
  doneOrder: (): string => {
    return "Shipped successfully";
  }
};

console.log("Customer purchase  Details: ");
console.log(user.doneOrder());
console.log(user.pId);
console.log(user.firstName);
console.log(user.lastName);

let customer: IPurchase = {
  firstName: "rupesh",
  lastName: "paswan",
  pId: 5,
  doneOrder: (): string => {
    return "shipped Successfully";
  }
};

console.log("Employee  purchase Details: ");
console.log(customer.doneOrder());
console.log(customer.pId);
console.log(customer.firstName);
console.log(customer.lastName);
