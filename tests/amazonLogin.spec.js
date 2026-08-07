const { test, expect } = require('@playwright/test');

test('Amazon Login - Enter Email and Continue', async ({ page }) => {

    
    await page.goto('https://www.amazon.in');

    await page.locator('#nav-link-accountList').click();


    await page.locator('#nav-link-accountList-nav-line-1');

    // Wait for the email input
    await page.waitForSelector('#ap_email_login');

    // Click the email field
    await page.locator('#ap_email_login').click();

    // Enter the email
    await page.locator('#ap_email_login').fill('sanyogkumarbhartiya@gmail.com');

    // Click Continue
    await page.locator('#continue').click();

    // Optional: wait to observe the result
    await page.waitForTimeout(5000);

    await page.locator('#ap_password').click();
    await page.locator('#ap_password').fill('Sanyog@9682446689');

    await page.locator('#signInSubmit').click();

    await page.waitForTimeout(5000);

    await page.locator('#twotabsearchtextbox').click().fill('watch')
});