class TestBase{
    launchBrowser() {
    console.log("Launching browser");
}
}
class LoginTest extends TestBase{
    launchBrowser() {
        super.launchBrowser()
        console.log("Opening Login Page");
        
    }
}
let test= new LoginTest()
test.launchBrowser()