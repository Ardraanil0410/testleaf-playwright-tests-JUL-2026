import test,{chromium, firefox, webkit} from "@playwright/test"

test("This is to create two Browser Instance",async () => {
    const browser1=await firefox.launch({headless:false})
    const context1=await browser1.newContext()
    const page1=await context1.newPage()
    await page1.goto("https://www.redbus.in")
    let pageTitle1=await page1.title()
    console.log(pageTitle1);
    let pageurl1=await page1.url()
    console.log(pageurl1);
    


    const browser2=await chromium.launch({headless:false,channel:"msedge"})
    const context2=await browser2.newContext()
    const page2=await context2.newPage()
    await page2.goto("https://www.flipkart.com")
     let pageTitle2=await page2.title()
    console.log(pageTitle2);
    let pageurl2=await page2.url()
    console.log(pageurl2);
    

    
})