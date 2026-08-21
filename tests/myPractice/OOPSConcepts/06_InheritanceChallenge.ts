// Scenario: Test Automation Framework

class TestAutomation{
    testerName:string
    applicationName:string

constructor(testerName:string,applicationName:string){
    this.testerName=testerName
    this.applicationName=applicationName
}
startTest(){
    console.log("Test execution started")
    
}
login(){
    console.log("Login to the application");
    
}
logout(){
    console.log("Logout from the application");
    
}
}
class WebTest extends TestAutomation{
constructor(testerName:string,applicationName:string){
    super(testerName,applicationName) 
}
openBrowser(){
    console.log("Browser opened");
    
}
closeBrowser(){
    console.log("Browser closed");
    
}

}
class MobileTest extends TestAutomation{
    constructor(testerName:string,applicationName:string){
        super(testerName,applicationName)
    }
launchMobileApp(){
    console.log("Mobile application launched");
}
closeMobileApp(){
    console.log("Mobile application closed");
    
}
}
let obj1=new TestAutomation("Ardra","TestLeaf")
obj1.startTest()
obj1.login()
obj1.logout()

let obj2= new WebTest("Latheesh","Facebook")
obj2.openBrowser()
obj2.closeBrowser()
obj2.startTest()
obj2.login()
obj2.logout()

let obj3=new MobileTest("Tanvi","Youtube")
obj3.launchMobileApp()
obj3.closeMobileApp()
obj3.startTest()
obj3.login()
obj3.logout()
