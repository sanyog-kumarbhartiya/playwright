require('dotenv').config();

const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const ProductPage = require('../pages/ProductPage');

test('Amazon Login and Search', async ({ page }) => {

    const login = new LoginPage(page);
    const search = new SearchPage(page);
    const product = new ProductPage(page);

    await login.openAmazon();

    await login.clickSignIn();

    await login.login(
        process.env.AMAZON_EMAIL,
        process.env.AMAZON_PASSWORD
    );

    await search.searchProduct("watch");
    await page.waitForTimeout(5000);

    await product.openProduct();

});