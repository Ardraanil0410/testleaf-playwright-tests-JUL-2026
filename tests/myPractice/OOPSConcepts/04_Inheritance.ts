
class TestBase{
    protected browserName:string

constructor(browserName:string){
    this.browserName=browserName

}
launchBrowser(){
    console.log(`Launching ${this.browserName} Browser`);
    
}

}

class LoginTest extends TestBase{
    constructor(browerName:string){
        super(browerName)
    }
login(){
    console.log("Logging into application");
    
}
showBrowser(){
    console.log(this.browserName);    
}
}
let test=new LoginTest("Chrome")
test.launchBrowser()
test.login()
test.showBrowser()
