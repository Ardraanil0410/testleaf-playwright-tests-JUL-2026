class TestData{
    username:string
    password:string
    constructor(username:string,password:string){
        this.username=username
        this.password=password

    }
    enterCredentials(username:string,password:string){
        console.log("This method have the credentails for login");
        


    }

    navigateToHomePage(){
        console.log("This will take you to the Home Page of the application");
        

    }
}
class LoginTestData extends TestData{
    
    
    constructor(username:string,password:string){
        super(username,password)
        
    }
    enterUsername(username:string){
    
      this.username=username

    }
    enterPassword(password:string){
        this.password=password
       

    }
}
let datachild= new LoginTestData("Ardra","Test@123")
datachild.enterUsername("Latheesh")
datachild.enterPassword("Test@1234")
datachild.navigateToHomePage()
datachild.enterCredentials("Latheesh","Test@1234")

let data= new TestData("Ardra","Test@123")
data.enterCredentials("Ardra","Test@123")
data.navigateToHomePage()
