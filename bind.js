var person = {
  firstName: "John",
  lastName: "Smith",
  age: 23,
};

function printFullName() {
  console.log(this.firstName + " " + this.lastName);
}

function printDetails() {
  console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName;
var boundPrintDetails;

boundPrintFullName = printFullName.bind(person);
boundPrintDetails = printDetails.bind(person);

boundPrintFullName();
boundPrintDetails();
