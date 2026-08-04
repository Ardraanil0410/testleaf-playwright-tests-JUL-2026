import test, { chromium } from "@playwright/test"

test("This is Assignment 1 from Locators",async () => {
    const browser= await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://login.salesforcr.com")
    
})
