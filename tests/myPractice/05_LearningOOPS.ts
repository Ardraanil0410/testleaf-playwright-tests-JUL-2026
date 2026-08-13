class PlaywrightCourse{
    courseName:string
    duration:number
    studentName:string


    constructor(name:string,timeline:number,details:string){
        this.courseName=name
        this.duration=timeline
        this.studentName=details

    }

    courseDetails(){
        console.log(`Student:${this.studentName}`);
        console.log(`Course:${this.courseName}`);
        console.log(`Duration:${this.duration}`);
        
    }

}
let courseinfo=new PlaywrightCourse("Playwright",8,"Ardra")
courseinfo.courseDetails()