interface Employee {

	firstName : string;
	lastname : string;
	age : number;
	salary : number;
	value : boolean;
	data : null;
}
let employee : Employee = {

	firstName : "Rahul",
	lastname : "Vikas",
	age : 32,
	salary : 1000,
	value : false,
	data : null
}
console.log(employee.firstName+" "+employee.lastname+" "+employee.age+" "+employee.firstName+" "+employee.lastname+" "+employee.age);