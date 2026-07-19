import { test, expect } from '@playwright/test';

test('login', async({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.getByLabel("Username").fill("practice");
    await page.getByLabel("Password").fill("SuperSecretPassword!");
    await page.getByRole('button', { name : 'Login'}).click();
    await expect(
        page.getByText("You logged into a secure area!", { exact: true })
    ).toBeVisible();
})

test('invalid login', async({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.getByLabel("Username").fill("eldab3");
    await page.getByLabel("Password").fill("SuperSecretPassword!");
    await page.getByRole('button', { name : 'Login'}).click();
    await expect(
        page.getByText("Your username is invalid!", { exact: true })
    ).toBeVisible();
})