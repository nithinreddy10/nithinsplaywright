import { test, expect } from '@playwright/test';

import data from "../testData/UserName.json"

test("verify login with valid credential in saucedemo webpage", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("(//input[@class='form_input'])[1]").fill(data.firstname)

    await page.locator("(//input[@class='form_input'])[2]").fill(data.lastname)

    await page.locator("//input[@type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

}
)

test("verify login with valid username and invalid password", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("(//input[@class='form_input'])[1]").fill("standard_user")

    await page.locator("(//input[@class='form_input'])[2]").fill("abcdef")

    await page.locator("//input[@type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()



}
)

test("verify login with invalid username and invalid password", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("(//input[@class='form_input'])[1]").fill("standard_use")

    await page.locator("(//input[@class='form_input'])[2]").fill("abcdef")

    await page.locator("//input[@type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()



}
)

test("verify successful login and logout", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("(//input[@class='form_input'])[1]").fill("standard_user")

    await page.locator("(//input[@class='form_input'])[2]").fill("secret_sauce")

    await page.locator("//input[@type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

    await page.locator("//button[normalize-space(text())='Open Menu']").click()

    await page.locator("(//a[@class='bm-item menu-item'])[3]").click()

    await expect(page.locator("(//body[@class='main-body']//div)[1]")).toBeVisible()






}
)
