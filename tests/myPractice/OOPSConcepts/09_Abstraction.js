"use strict";
class Test {
    generateReport() {
        console.log("This is to generate Test Report");
    }
}
class LoginTest extends Test {
    executeTest() {
        console.log("This is to execute Login Test");
    }
}
class SearchTest extends Test {
    executeTest() {
        console.log("This is to execute Search flow");
    }
}
let login = new LoginTest();
let search = new SearchTest();
login.executeTest();
login.generateReport();
search.executeTest();
search.generateReport();
