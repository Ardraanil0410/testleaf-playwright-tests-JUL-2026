class Employee{
    public name:string
    private salary:number

constructor(name:string,salary:number){
    this.name=name
    this.salary=salary
}

//get cannot have any parameters
get salaryAmount(){
    return this.salary
}
//set should have atleast one parameter
set salaryAmount(newSalary:number){
    
    if (newSalary>200000){
        console.log("Salary greater than 200000 is not allowed");}

    else if(newSalary<0){
        console.log("Salary cannot be negative");}
    
    else{
        this.salary=newSalary
    }
        
    
        
    }
}
let emp = new Employee("Ardra", 50000);

console.log(emp.salaryAmount);

emp.salaryAmount = 60000;

console.log(emp.salaryAmount);

emp.salaryAmount = -5000;

emp.salaryAmount = 500000;

console.log(emp.salaryAmount);







