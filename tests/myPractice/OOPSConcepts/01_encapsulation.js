"use strict";
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    increaseSalary(amount) {
        if (amount > 0) {
            this.salary = this.salary + amount;
        }
        else {
            console.log("Amount cannot be negative");
        }
    }
    getSalary() {
        return this.salary;
    }
}
let emp = new Employee("Ardra", 50000);
emp.increaseSalary(5000);
console.log(`The expected salary should be :${emp.getSalary()}`);
