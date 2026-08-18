"use strict";
class TestData {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    enterCredentials(username, password) {
        console.log("This method have the credentails for login");
    }
    navigateToHomePage() {
        console.log("This will take you to the Home Page of the application");
    }
}
class LoginTestData extends TestData {
    constructor(username, password) {
        super(username, password);
    }
    enterUsername(username) {
        this.username = username;
    }
    enterPassword(password) {
        this.password = password;
    }
}
let datachild = new LoginTestData("Ardra", "Test@123");
datachild.enterUsername("Latheesh");
datachild.enterPassword("Test@1234");
datachild.navigateToHomePage();
datachild.enterCredentials("Latheesh", "Test@1234");
let data = new TestData("Ardra", "Test@123");
data.enterCredentials("Ardra", "Test@123");
data.navigateToHomePage();
