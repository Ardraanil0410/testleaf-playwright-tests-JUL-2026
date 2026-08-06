import test, {chromium} from "@playwright/test"

test("This is to learn Dropdown in Playwright",async({page})=>{

    await page.goto("https://demoqa.com/select-menu")

   await page.locator("#withOptGroup").click()
   await page.getByText("Group 2, option 1",{exact:true}).click()

   await page.locator("#selectOne").click()
   await page.getByText("Mr.",{exact:true}).click()

   await page.locator("#oldSelectMenu").selectOption("Purple")


   await page.getByText("Multiselect drop down").click()
   await page.locator(".css-9jq23d").getByText("Black")


    await page.locator("#cars").selectOption(["Volvo","Opel"])

    console.log("Done with Select Menu");
    


})