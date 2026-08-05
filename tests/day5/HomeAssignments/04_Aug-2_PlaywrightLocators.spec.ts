//Assignment 1

import test,{chromium} from "@playwright/test"

test("This is to Learn about Playwright Locators- Assignment 1 from Aug 2", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill("democsr2")
    await page.getByLabel("Password").fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
    console.log("Login Successful");
    

    await page.getByRole("link",{name:"CRM/SFA"}).click()

    await page.getByRole("link",{name:"Leads"}).click()

    await page.getByRole("link",{name:"Create Lead"}).click()
    console.log(await page.url());
    //Company Name
   await page.locator("#createLeadForm_companyName").fill("ABCD Company")
//    await page.locator(`//input[@name="Company"]`).fill("ABCD Company")
    console.log("Filled Company Name now");
    
    

    //First Name
    await page.locator(`input#createLeadForm_firstName`).fill("Tester")
    console.log("Filled First Name");
    //Last Name
    await page.locator("input#createLeadForm_lastName").fill("TestLeaf")
    
    //Salutation
    await page.locator(`input#createLeadForm_personalTitle`).fill("Mrs")
    //Title

    await page.locator(`input#createLeadForm_generalProfTitle`).fill("Dr")
    //Annual Revenue

await page.locator("input#createLeadForm_annualRevenue").fill("10,00000")
    //Department

await page.locator(`input#createLeadForm_departmentName`).fill("Engineering")
    //Phone Number

await page.locator(`input#createLeadForm_primaryPhoneNumber`).fill("7834678987")
    //Click Create Button
await page.getByRole("button",{name:"Create Lead"}).click()

console.log("Successfully created Lead");
console.log(await page.title())

    

})
