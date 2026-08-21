interface TestActions{
    executeTest():void
    generateReport():void
}
class LoginTest implements TestActions{
    executeTest(): void {
        console.log("Login test executed");
        
    }
    generateReport(): void {
        console.log("Login test report generated")
        
    }
}
class SearchTest implements TestActions{
    executeTest(): void {
        console.log("Search test executed");
        
    }
    generateReport(): void {
        console.log("Search test report generated");
        
    }
}
let actions:TestActions=new LoginTest()
actions.executeTest()
actions.generateReport()

actions=new SearchTest()
actions.executeTest()
actions.generateReport()