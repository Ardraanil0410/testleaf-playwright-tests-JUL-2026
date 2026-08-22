import test from "@playwright/test"

test.use({storageState:"data/auth.json"})

test("Salesforce - skip login", async ({ page }) => {
await page.goto("https://login.salesforce.com/");

  await page.waitForTimeout(5000);

  const titlePage = await page.title();

  console.log("Title of the page is: " + titlePage);
  

});
  
