import { test, expect } from '@playwright/test';

import JobDropdownNames from "../testData/OrangeHRM.json"
import data from "../../testData/UserName.json"


const jobtitles = {
    jobtitle1 : "QA1",
    jobtitle2 : "QA2",
    jobtitle3 : "QA3",
}
//written whole test case in the for loop
for (let title in jobtitles ){
    test(`OrangeHRM add job title1 - ${jobtitles[title]}`, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(data.OrangeUsername)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(data.OrangePassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    // generating random chars with small javascript
    let randomtext = (Math.random() + 1).toString(36).substring(7);
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(JobDropdownNames[jobtitles[title]] + randomtext);
    await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill(JobDropdownNames['job description']);
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");


}
)
}

