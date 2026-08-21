"use strict";
class TestBase {
    browserName;
    constructor(browserName) {
        this.browserName = browserName;
    }
    launchBrowser() {
        console.log("Launching Chrome Browser");
    }
}
class LoginTest extends TestBase {
    constructor(browerName) {
        super(browerName);
    }
    login() {
        console.log("Logging into application");
    }
    showBrowser() {
        console.log(this.browserName);
    }
}
let test = new LoginTest("Chrome");
test.launchBrowser();
test.login();
test.showBrowser();
