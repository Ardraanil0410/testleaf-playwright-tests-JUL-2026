import test, { chromium, expect } from "@playwright/test"

test("This is Assignment 1 from CSS Selectors",async () => {
    const browser= await chromium.launch({headless:false})
    const context=await browser.newContext({permissions:[]})
    const page = await context.newPage()

    await page.goto("https://login.salesforce.com")
    await page.waitForLoadState("networkidle");

    //Login
    await page.locator('input[type="email"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('input[type="password"]').fill("TestLeaf@2025")
    await page.locator('input[value="Log In"]').click()
    console.log("Login Successful");

    //to click on Menu 
    await page.locator("//div[@class='slds-icon-waffle']").click()
    await page.locator("//button[text()='View All']").click()
    console.log("Menu clicked");
    

    //Selecting Sales 
    await page.locator(`//p[text()="Sales"]`).click()
    const title = await page.title();
    console.log("Page Title:", title);
    console.log("Clicked Sales");
    

    //Selecting Leads and clicking New
    await page.locator(`//a[@title="Leads"]`).click()
    await page.locator(`//button[@name="New"]`).click()
    console.log("Selected Leads");
    

    //Selecting DD
    await page.locator(`//button[@name="salutation"]`).click()
    console.log("Opened Dropdown");

    //Selecting Mr from Salutation DD
    await page.getByText("Mr.",{exact:true}).click()
    console.log("Selected Mr");
    
    //Entering Last Name
    await page.locator(`//input[@name="lastName"]`).fill("TestleafTester")
    console.log("Last name entered");
    

    //Entering Company Name
    await page.locator(`//input[@name="Company"]`).fill("ABCD Company")
    console.log("Company name entered");
    

    //Save and Verify leads name created
   await page.locator(`//button[@name="SaveEdit"]`).click()
   //Verifying the Lead is created
   const successMsg = page.locator("span.toastMessage");
    await expect(successMsg).toBeVisible();
    console.log(await successMsg.textContent());

    

})
