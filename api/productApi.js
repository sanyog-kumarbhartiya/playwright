const { getApiHeaders } =
    require('../utils/apiHeaders');

class ProductApi {

    constructor(request) {

        this.request = request;

        this.headers = getApiHeaders();

    }


    async createProduct(productData) {

        return await this.request.post(
            '/products',
            {
                headers: this.headers,
                data: productData
            }
        );

    }


    async getProduct(productId) {

        return await this.request.get(
            `/products/${productId}`,
            {
                headers: this.headers
            }
        );

    }


    async deleteProduct(productId) {

        return await this.request.delete(
            `/products/${productId}`,
            {
                headers: this.headers
            }
        );

    }

}

module.exports = ProductApi;