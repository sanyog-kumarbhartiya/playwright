require('dotenv').config();

module.exports = {

    baseURL: process.env.API_BASE_URL,

    endpoints: {
        products: '/products'
    }

};