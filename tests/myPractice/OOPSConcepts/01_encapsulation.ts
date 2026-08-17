class Employee{
    public name:string
    private salary:number

constructor(name:string,salary:number){
    this.name=name
    this.salary=salary

}
increaseSalary(amount:number){
    if (amount>0){
       this.salary=this.salary+amount
    }
    else {
        console.log("Amount cannot be negative");
        
    }
}
    
getSalary(){
        return this.salary
}

}
let emp = new Employee("Ardra", 50000);
emp.increaseSalary(5000)
console.log(`The expected salary should be :${emp.getSalary()}`)