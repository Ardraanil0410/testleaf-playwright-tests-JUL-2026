"use strict";
class Employee {
    name;
    role;
    experience;
    constructor(name, role, experience) {
        this.name = name;
        this.role = role;
        this.experience = experience;
    }
    displayEmployee() {
        console.log(`Name:${this.name}`);
        console.log(`Role:${this.role}`);
        console.log(`Experience:${this.experience} years`);
    }
}
let employeedetails = new Employee("Ardra", "QA Automation Engineer", 10);
employeedetails.displayEmployee();
let employeedetails2 = new Employee("Latheesh", "Software Engineer", 13);
employeedetails2.displayEmployee();
