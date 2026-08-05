import {test, expect} from '@playwright/test';

test('Locators',async({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await page.locator('id=user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    // await page.locator('id=login-button').click();
    await page.click('id=login-button');

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.locator('.title')).toContainText('Products');


})