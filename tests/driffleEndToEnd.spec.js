require('dotenv').config();

const { test } = require('@playwright/test');

const driffleLoginPage =
    require('../pages/DriffleLoginPage');

const driffleSearchPage =
    require('../pages/DriffleSearchPage');


test('driffle end to end test case', async ({ page }) => {

    const login =
        new driffleLoginPage(page);

    const search =
        new driffleSearchPage(page);


    // Open Driffle
    await test.step('open driffle', async () => {

        await login.openDriffle();

        console.log('Driffle opened successfully');

    });


    // Search product
    await test.step('search product - Roblox', async () => {

        await search.searchProduct('Roblox');

        console.log('Search Product: Roblox');

    });


    // Select product
    await test.step('select product', async () => {

        await search.clickProduct();

        console.log('Product selected successfully');

    });


    // Verify Product Title
    await test.step('verify product title', async () => {

        const productTitle =
            await search.verifyProductTitle();

        console.log(
            `Product Title: ${productTitle}`
        );

    });


    // Verify Plus Price
    await test.step('verify plus price', async () => {

        const plusPrice =
            await search.verifyPlusPrice();

        console.log(
            `Plus Price: ${plusPrice}`
        );

    });


    // Verify Featured Price
    await test.step('verify featured price', async () => {

        const featuredPrice =
            await search.verifyFeaturedPrice();

        console.log(
            `Featured Price: ${featuredPrice}`
        );

    });


    // Click Buy Now
    await test.step('click buy now', async () => {

        await search.clickBuyNow();

        console.log(
            'Buy Now clicked successfully'
        );

    });


    // Verify Cart Total
    // await test.step('verify cart total', async () => {

    //     const cartTotal =
    //         await search.verifyCartTotal();

    //     console.log(
    //         `Cart Total: ${cartTotal}`
    //     );

    // });

});
