import {test, expect} from "@playwright/test"

const education={
    edu1:{
        edulevel : "school2"
    },
    edu2: {
        edulevel : "inter2"
    },
    edu3: {
        edulevel : "college2"
    }   
}

for (let edu in education)
{
    test(`OrangeHRM add job titles ${edu}`, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(process.env.ORGHRM_USERNAME)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(process.env.ORGHRM_PASSWORD)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("header[class='oxd-topbar'] li:nth-child(4)").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[2]").click()
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(education[edu].edulevel)
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
    await page.locator("(//div[contains(@class,'oxd-table-header-cell oxd-padding-cell')])[2]").isVisible()








    })
}
