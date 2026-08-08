import { test, expect} from '@playwright/test'


test('end to end testing', async({page})=>{

    await page.goto('https://driffle.com/')

    const logo = page.locator('[data-test-id="header-logo"]').first();

    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/')

    const searchbar = page.locator('[data-test-id="header-search-input"]');
    await expect(searchbar).toBeVisible();

    const location = page.locator('[data-test-id="header-currency-language-button"]')
    await expect(location).toBeVisible();
    
    const cart = page.locator('[data-test-id="header-cart-button"]');
    await expect(cart).toBeVisible();
    await expect(cart).toHaveAttribute('href', '/cart');

    const downloadAppBtn = page.getByRole('button', {name: 'Download App'});
    await expect(downloadAppBtn).toBeVisible();

    const loginBtn = page.locator('[data-test-id="dekstop-login-button"]');
    await expect(loginBtn).toBeVisible();


    



})