"use strict";
class Employee {
    work() {
        console.log("Employee is working");
    }
}
class Developer extends Employee {
    work() {
        console.log("Developer is writing code");
    }
}
class Tester extends Employee {
    work() {
        console.log("Tester is testing the application");
    }
}
//Normal method overridding
// let obj=new Developer()
// obj.work()
// let obj2=new Tester()
// obj2.work()
//Runtime Polymorphism
let employee = new Developer();
employee.work();
employee = new Tester();
employee.work();
