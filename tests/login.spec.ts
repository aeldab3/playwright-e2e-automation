import { test, expect } from '@playwright/test';

test('login', async({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//input[@id='username']").fill("practice");
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!");
    await page.locator("//button[@id='submit-login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!");
})

test('invalid login', async({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator("//input[@id='username']").fill("eldab3");
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!");
    await page.locator("//button[@id='submit-login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("Your username is invalid!");
})