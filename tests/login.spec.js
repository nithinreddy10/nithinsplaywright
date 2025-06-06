import { test, expect } from '@playwright/test';

test ("verify login with valid credential", async ({page})=>{

await page.goto("https://development.pilot.petsmart.com/?experimentGroup=fullsolution")

await page.locator("//a[@class='sparky-c-text-link legacy-signin__link']//span[1]").click()

await page.locator("(//input[@name='email'])[1]").fill("nithinreddymao+vipp@gmail.com")

await page.locator("(//input[@name='password'])[1]").fill("ABHIxyz1@")

await page.locator("(//button[contains(@class,'sparky-c-button sparky-c-button--primary')])[1]").click()



}

)