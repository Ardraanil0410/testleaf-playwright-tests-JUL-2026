abstract class Test{
    abstract executeTest():void

    generateReport(){
console.log("This is to generate Test Report");

    }
}
class LoginTest extends Test{
    executeTest(): void {
        console.log("This is to execute Login Test");
        
    }

}
class SearchTest extends Test{
    executeTest(): void {
        console.log("This is to execute Search flow");
        
    }
}
// let login=new LoginTest()
// let search=new SearchTest()
// login.executeTest()
// login.generateReport()

// search.executeTest()
// search.generateReport()

let test:Test=new LoginTest()
test.executeTest()
test.generateReport()

test=new SearchTest()
test.executeTest()
test.generateReport()