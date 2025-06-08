import { test, expect } from '@playwright/test';

import data from "../testData/LoginDetails.json"

test("verify login with valid credential in saucedemo webpage", async ({ page }) => {

    await page.goto("https://development.pilot.petsmart.com?experimentGroup=fullsolution")
    await page.locator("//a[@class='sparky-c-text-link legacy-signin__link']//span[1]").click()
    await page.locator("(//input[@name='email'])[1]").fill(data.username)
    await page.locator("(//input[@name='password'])[1]").fill(data.password)
    await page.locator("(//div[@class='sparky-l-grid__item sign-in-form__cta']//button)[1]").click()





}
)
