"use strict";
class LoginTest {
    executeTest() {
        console.log("Login test executed");
    }
    generateReport() {
        console.log("Login test report generated");
    }
}
class SearchTest {
    executeTest() {
        console.log("Search test executed");
    }
    generateReport() {
        console.log("Search test report generated");
    }
}
let actions = new LoginTest();
actions.executeTest();
actions.generateReport();
actions = new SearchTest();
actions.executeTest();
actions.generateReport();
