
const { expect } = require('@playwright/test');

class DriffleSearchPage {

    constructor(page) {
        this.page = page;

        this.search =
            '[data-test-id="header-search-input"]';

        this.productVisible =
            '[data-test-id="header-search-suggestion"]';

        this.productTitle =
            '[data-test-id="pdp-product-title"]';

        this.priceWithPlus =
            '[role="radiogroup"] [data-test-id="pdp-buy-with-plus-button"]:visible';

        this.priceWithFeatcher =
            '[data-test-id="pdp-featured-offer-price"]:visible';

        this.buyNow =
            '[data-test-id="pdp-offer-buy-now-button"]:visible';

        this.CartTotal =
            '[data-test-id="cart-total"]';
    }


    async openDriffle() {

        await this.page.goto('https://driffle.com');

    }


    async searchProduct(productName) {

        await this.page.fill(
            this.search,
            productName
        );

    }


    async clickProduct() {

        await this.page
            .locator(this.productVisible)
            .first()
            .click();

    }


    async verifyProductTitle() {

        const title = this.page
            .locator(this.productTitle)
            .first();

        await expect(title).toBeVisible();

        const productTitle = await title.innerText();

        return productTitle;
    }


    async verifyPlusPrice() {

        const plusPrice = this.page
            .locator(this.priceWithPlus)
            .first();

        await expect(plusPrice).toBeVisible();

        const price = await plusPrice.innerText();

        return price;
    }


    async verifyFeaturedPrice() {

        const featuredPrice = this.page
            .locator(this.priceWithFeatcher)
            .first();

        await expect(featuredPrice).toBeVisible();

        const price = await featuredPrice.innerText();

        return price;
    }


    async clickBuyNow() {

        const buyNow = this.page
            .locator(this.buyNow)
            .first();

        await expect(buyNow).toBeVisible();

        await buyNow.click();

    }


    async verifyCartTotal() {

        const cartTotal = this.page
            .locator(this.CartTotal)
            .first();

        await expect(cartTotal).toBeVisible();

        const total = await cartTotal.innerText();

        return total;
    }

}

module.exports = DriffleSearchPage;

