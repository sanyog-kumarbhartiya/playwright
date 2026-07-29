class DetailProductPage {

    constructor(page) {
        this.page = page;

        this.productName = 'span#productTitle';
        this.productDiscount = 'span.savingsPercentage';
        this.productPrice = 'span.priceToPay span.a-offscreen';
        this.productMrp = 'span.a-price.a-text-price span.a-offscreen';
    }

    async ProductDetails() {


        const name = await this.page.locator(this.productName).innerText();

        const discount = await this.page.locator(this.productDiscount).first().innerText();

        const price = await this.page.locator(this.productPrice).first().innerText();

        let mrp = "N/A";

        if (await this.page.locator(this.productMrp).count() > 0) {
            mrp = await this.page.locator(this.productMrp).first().innerText();
        }

        console.log("Product :", name.trim());
        console.log("Discount :", discount);
        console.log("Price :", price);
        console.log("MRP :", mrp);

        return {
            name,
            discount,
            price,
            mrp
        };
    }
}

module.exports = DetailProductPage;