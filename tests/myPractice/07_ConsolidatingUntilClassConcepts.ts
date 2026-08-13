type TestStatus ="Passed"|"Failed"|"Blocked"
class TestCase{
    testName:string
    testerName:string
    executionTime:number
    status:TestStatus
    
constructor(testName:string,testerName:string,executionTime:number,status:TestStatus)
{
    
   this.testName=testName
    this.testerName=testerName
    this.executionTime=executionTime
    this.status=status
}
displayTestDetails(){
    console.log(`Test Name:${this.testName}`);
    console.log(`Tester:${this.testerName}`);
    console.log(`Execution Time:${this.executionTime}`);
    console.log(`Status:${this.status}`);
}

checkStatus(){
    if (this.status==="Passed") {
        console.log("Test completed successfully");   
    }
    else if(this.status==="Failed"){
        console.log("Test needs investigation");    
    }
    else{
        console.log("Test cannot be executed");   
    }
}   

}
let testdetails=new TestCase("Login Test","Ardra",5,"Passed")
testdetails.displayTestDetails()
testdetails.checkStatus()

let testdetails2=new TestCase("Payment Test","Latheesh",8,"Failed")
testdetails2.displayTestDetails()
testdetails2.checkStatus()

let tests=[testdetails,testdetails2]
for (let test of tests){
    test.checkStatus()
    test.displayTestDetails()
}