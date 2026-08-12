import test from "@playwright/test";

test("Frame and Alert Interaction",async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    page.on("dialog",async alert=>{
        console.log("Popup message:", alert.message());
        await alert.accept()
    })

   const frame = page.frameLocator("#iframeResult").first();
await frame.getByRole("button", { name: "Try it" }).click();



}
)
