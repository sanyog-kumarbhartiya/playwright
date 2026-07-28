class ProductPage {
    constructor(page) {
        this.page = page;
        this.firstProduct = '[data-component-type="s-search-result"]';
        this.productTitle = 'h2 span';
        this.productPrice = '.a-price-whole';
        this.addToCart = 'input[name="submit.addToCart"]';
    }

   async getFirstProductDetails() {

        const first = this.page.locator(this.firstProduct).first();

        const title = await first.locator(this.productTitle).textContent();
        const price = await first.locator(this.productPrice).textContent();

        console.log("Product :", title);
        console.log("Price :", price);

        return {
            title,
            price
        };
    }
}
module.exports = ProductPage;