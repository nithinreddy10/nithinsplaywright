import { test, expect } from '@playwright/test';

import data from "../testData/UserName.json"
import jobtitles from "../testData/addjobtitle.json"

test("OrangeHRM add job title", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(data.OrangeUsername)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(data.OrangePassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitles['job title'])
    await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill(jobtitles['job description'])
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")


}
)
