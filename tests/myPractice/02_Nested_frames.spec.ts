import test,{chromium} from "@playwright/test"

test("This is to automate Nested Franes", async({page})=>{

    await page.goto("https://demoqa.com/")
    await page.getByText("Alerts, Frame & Windows").click()

    await page.getByText("Nested Frames").click()

    //Parent frame
    const parentFrame= page.frameLocator("#frame1")
    const pageText= await page.locator("body").textContent()//this will print whole content
    const parentText= await parentFrame.locator("body").textContent()
    console.log((parentText));

    //Child frame
    const childFrameTxt= await parentFrame.frameLocator("iframe").locator("p").textContent()
    console.log(childFrameTxt);
    
    

     

}

)