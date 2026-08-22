import test from "@playwright/test"

test("Salesforce Login data storage", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");

  // Enter username and password
  await page.fill("#username", "ardra.anil@gmail.com");
  await page.locator("#Login").click();
  await page.fill("#password", "Ardr@0410");
   await page.locator("#Login").click();

  await page.context().storageState({path:"data/auth.json"})
  await page.waitForTimeout(5000)
  let titlePage=await page.title()
  console.log("Title of the page is : "+titlePage)
  
})

