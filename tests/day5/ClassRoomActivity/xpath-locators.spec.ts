import { test } from "@playwright/test";

test("Learn Relative XPath", async ({ page }) => {
    // 1. Navigate to the Salesforce login page.
    await page.goto("https://login.salesforce.com/?locale=ca");
    
    // 2. Using different CSS selector strategies 
    // await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    // await page.locator("#password").fill("TestLeaf@2025")
    // await page.locator("#Login").click()

    //3. Use XPath selectors 
    await page.locator('//input[@name="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('//input[@name="pw"]').fill("TestLeaf@2025")
    await page.locator('//input[@name="Login"]').click()

  
    // 4.To check Login is succcessful
     await page.waitForTimeout(5000);

const title = await page.title();

console.log("Page title is:", title);




});