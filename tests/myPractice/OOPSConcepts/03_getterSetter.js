"use strict";
class TestCase {
    testName;
    status;
    constructor(testName, status) {
        this.testName = testName;
        this.status = status;
    }
    get statusFetch() {
        return this.status;
    }
    set statusFetch(status) {
        if (status === "Not Started" ||
            status === "Running" || status === "Passed" || status === "Failed") {
            this.status = status;
        }
        else {
            console.log("Invalid Status");
        }
    }
}
let test = new TestCase("Login Test", "Not Started");
console.log(test.statusFetch);
test.statusFetch = "Running";
console.log(test.statusFetch);
test.statusFetch = "Completed";
console.log(test.statusFetch);
test.statusFetch = "Passed";
console.log(test.statusFetch);
