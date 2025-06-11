import { test, expect } from '@playwright/test';

import data from "../../testData/UserName.json"
import JobDropdownNames from "../../testData/OrangeHRM.json"

test("OrangeHRM add job title", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(process.env.ORGHRM_USERNAME)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(process.env.ORGHRM_PASSWORD)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(JobDropdownNames['job title'])
    await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill(JobDropdownNames['job description'])
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")


}
)

test("OrangeHRM add Pay Grades", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(data.OrangeUsername)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(data.OrangePassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    //click Pay Grades from dropdown
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[2]").click()
    await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(JobDropdownNames['pay grade name'])
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()

    
}
)


test("OrangeHRM add Employment Status", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(data.OrangeUsername)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(data.OrangePassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    //click Employment status from dropdown
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[3]").click()
    //verify employment status title
    await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(JobDropdownNames['employment status'])
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click() 
    await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")

}
)

test("OrangeHRM add Job Categories", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(data.OrangeUsername)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(data.OrangePassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    //click Employment status from dropdown
    await page.locator("//a[normalize-space(text())='Job Categories']").click()
    //verify employment status title
    await page.locator("((//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(JobDropdownNames['job category'])
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click() 
    await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")

}
)

test("OrangeHRM add work shifts", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill(data.OrangeUsername)
    await page.locator("//label[normalize-space(text())='Password']/following::input").fill(data.OrangePassword)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
    await page.locator("(//li[@class='oxd-topbar-body-nav-tab --parent']//span)[1]").click()
    //click Employment status from dropdown
    await page.locator("//a[normalize-space(text())='Work Shifts']").click()
    //verify employment status title
    await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
    await page.locator("(//label[normalize-space(text())='Shift Name']/following::input)[1]").fill(JobDropdownNames['Work shift name'])
    await page.locator("(//label[normalize-space(text())='From']/following::input)[1]").fill(JobDropdownNames['Working hours from'])
    await page.locator("(//label[normalize-space(text())='To']/following::input)[1]").fill(JobDropdownNames['Working hours to'])
    await page.locator("//label[normalize-space(text())='Assigned Employees']/following::input").fill(JobDropdownNames['Work shift hints text box'])
    await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click() 
    await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")

}
)

