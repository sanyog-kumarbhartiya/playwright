require('dotenv').config();

const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const ProductPage = require('../pages/ProductPage');
const DetailProductPage = require('../pages/DetailProductPage');

test('Amazon Login and Search', async ({ page }) => {

    let result;

    const login = new LoginPage(page);
    const search = new SearchPage(page);
    const product = new ProductPage(page);

    await test.step('Step 1: Open Amazon and Login', async () => {

        console.log("========== Step 1 ==========");
        console.log("Login to Amazon");

        await login.openAmazon();
        await login.clickSignIn();

        await login.login(
            process.env.AMAZON_EMAIL,
            process.env.AMAZON_PASSWORD
        );

        console.log("Login Successful");
    });

    await test.step('Step 2: Search Product', async () => {

        console.log("========== Step 2 ==========");
        console.log("Searching Product : watch");

        await search.searchProduct("watch");

        console.log("Search Completed");
    });

    await test.step('Step 3: Open First Product', async () => {

        console.log("========== Step 3 ==========");

        result = await product.getFirstProductDetails();

        console.log("First Product Opened");
    });

    await test.step('Step 4: Verify Product Details', async () => {

        console.log("========== Step 4 ==========");

        const details = new DetailProductPage(result.newPage);

        const productDetails = await details.ProductDetails();

        // console.log("Product Name :", productDetails.name);
        // console.log("Discount    :", productDetails.discount);
        // console.log("Price       :", productDetails.price);
        // console.log("MRP         :", productDetails.mrp);
    });

});