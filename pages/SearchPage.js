class SearchPage {

    constructor(page) {

        this.page = page;

        this.searchBox = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
        this.firstProduct = '[data-component-type="s-search-result"]';
    }

    async searchProduct(product) {

        await this.page.fill(this.searchBox, product);
        await this.page.click(this.searchButton);

        await this.page.waitForSelector(this.firstProduct);
    }

}

module.exports = SearchPage;