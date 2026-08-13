"use strict";
class LearnPlaywright {
    courseName = "Playwright"; //Global variable
    courseDuration() {
        let nextCourse = "Gen AI"; //Local variable
        console.log(`This is a 8 week course,${this.courseName}`);
        console.log(`This is the next course :,${nextCourse}`);
    }
}
let course = new LearnPlaywright();
console.log(course.courseName);
course.courseDuration();
