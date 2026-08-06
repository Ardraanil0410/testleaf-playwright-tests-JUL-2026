import test,{chromium, expect} from "@playwright/test"

test("This is to automate iframe",async({page})=>{
    await page.goto("https://demoqa.com")
    await page.waitForLoadState("load");


 await page.getByText(`Alerts, Frame & Windows`).click()
 console.log(await page.url())

//  await page.locator(`//div[@class="icon"][3]`).click()
 await page.locator(`//a[@href="/frames"]`).click()
 console.log(await page.url())
  
 //Accessing frames
 //frame1
 const framemsg= await page.frameLocator("#frame1").getByText("This is a sample page").textContent()
 console.log(`Accessed Frame1 and the messsage is,${framemsg}`);

 //frame2
 const framemesg2=await page.frameLocator("iframe#frame2").locator("#sampleHeading").textContent()
 console.log(framemesg2);
 



})