"use strict";
class TestExecution {
    testName;
    browser;
    executionTime;
    result;
    constructor(testName, browser, executionTime, result) {
        this.testName = testName;
        this.browser = browser;
        this.executionTime = executionTime;
        this.result = result;
    }
    getExecutionSummary() {
        console.log(`Test:${this.testName}`);
        console.log(`Browser:${this.browser}`);
        console.log(`Execution Time:${this.executionTime}`);
        console.log(`Result:${this.result}`);
    }
    getResultMessage() {
        if (this.result === "Passed") {
            console.log("Test executed successfully");
        }
        else if (this.result === "Failed") {
            console.log("Test failed - investigate the failure");
        }
        else {
            console.log("Test was skipped");
        }
    }
}
let test1 = new TestExecution("Login Test", "Chrome", 4, "Passed");
let test2 = new TestExecution("Payment Test", "Firefox", 7, "Failed");
let test3 = new TestExecution("Logout Test", "Edge", 2, "Skipped");
let testResults = [test1, test2, test3];
for (let test of testResults) {
    test.getExecutionSummary();
    test.getResultMessage();
}
