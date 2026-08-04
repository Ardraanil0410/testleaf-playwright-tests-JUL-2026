import test,{chromium} from "@playwright/test"

test ("Learn to automate Login of Salesforce",async()=>{
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const  page=await context.newPage()

    await page.goto("https://login.salesforce.com/")
    //1.Simple way using id and class

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    //To print the page title and URL

  await page.waitForURL(/lightning\.force\.com/);
    const pageTitle = await page.title();

    console.log("The title is:", pageTitle);

    let pageUrl= await page.url()
    console.log(`The URL of the page is,${pageUrl}`);
    
    browser.close()
    
})
