class LearnPlaywright {
    courseName:string="Playwright"//Global variable

    courseDuration(){
        let nextCourse:string="Gen AI"//Local variable
        console.log(`This is a 8 week course,${this.courseName}`);
        console.log(`This is the next course :,${nextCourse}`)
           }

           
}
let course= new LearnPlaywright()
console.log(course.courseName)
           course.courseDuration()