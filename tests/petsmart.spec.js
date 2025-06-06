import { test, expect } from '@playwright/test';

import data from "../testData/LoginDetails.json"

test("verify login with valid credential in saucedemo webpage", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("(//input[@class='form_input'])[1]").fill(data.username)

    await page.locator("(//input[@class='form_input'])[2]").fill(data.password)

    await page.locator("//input[@type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

}
)
