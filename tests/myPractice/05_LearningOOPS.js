"use strict";
class PlaywrightCourse {
    courseName;
    duration;
    studentName;
    constructor(name, timeline, details) {
        this.courseName = name;
        this.duration = timeline;
        this.studentName = details;
    }
    courseDetails() {
        console.log(`Student:${this.studentName}`);
        console.log(`Course:${this.courseName}`);
        console.log(`Duration:${this.duration}`);
    }
}
let courseinfo = new PlaywrightCourse("Playwright", 8, "Ardra");
courseinfo.courseDetails();
