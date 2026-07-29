class ProductPage {
    constructor(page) {
        this.page = page;
        this.firstProduct = '[data-component-type="s-search-result"]';
        this.productTitle = 'a.a-link-normal h2 span';
        this.productPrice = '.a-price-whole';
        this.addToCart = 'input[name="submit.addToCart"]';
        this.clickOnProduct = '.s-product-image-container';
        

    }

  async getFirstProductDetails() {

    const first = this.page.locator(this.firstProduct).first();

    const title = await first.locator(this.productTitle).textContent();
    const price = await first.locator(this.productPrice).textContent();

    console.log("Product :", title);
    console.log("Price :", price);

    // Wait for new tab to open
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        first.locator(this.clickOnProduct).click()
    ]);

    // Wait until the new page is loaded
    await newPage.waitForLoadState('domcontentloaded');

    return {
        title,
        price,
        newPage
    };
}
}
module.exports = ProductPage;