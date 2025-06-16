import { test, expect } from '@playwright/test';

test("Hero ku app missing elements", async ({ page }) => {

    const ContactUs = await page.locator("//a[normalize-space()='Contact Us']")
    const About = await page.locator("//a[normalize-space()='About']")
    const Portfolio = await page.locator("//a[normalize-space()='Portfolio']")
    const Gallery = await page.locator("//a[normalize-space()='Gallery']")

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")

    if(await Gallery.isVisible())
        {
            await Gallery.click()
            await page.locator("//h1[normalize-space()='Not Found']").isVisible()
            console.log("clicked on Gallery")

        }
    

    else if (await ContactUs.isVisible()) {
        //click on ContactUs
        await ContactUs.click()
        await page.locator("//h1[normalize-space()='Not Found']").isVisible()
        await page.goto("https://the-internet.herokuapp.com/disappearing_elements")
        //Click on About
        await About.click()
        await page.locator("//h1[normalize-space()='Not Found']").isVisible()
        await page.goto("https://the-internet.herokuapp.com/disappearing_elements")
        //Click on portfolio
        await Portfolio.click()
        await page.locator("//h1[normalize-space()='Not Found']").isVisible()
        await page.goto("https://the-internet.herokuapp.com/disappearing_elements")

        console.log("clicked on ContactUs, About & Portfolio")
    }
 
    else 
    {
        console.log("no elements found")
    }
   

}
)


// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(process.env.ORGHRM_USERNAME)
//     await page.locator("//label[normalize-space(text())='Password']/following::input").fill(process.env.ORGHRM_PASSWORD)
//     await page.locator("//button[@type='submit']").click()