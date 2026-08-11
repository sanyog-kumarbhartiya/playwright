const { test, expect } = require('@playwright/test');

const ProductApi =
    require('../api/productApi');


test('Product CRUD API', async ({ request }) => {

    const productApi =
        new ProductApi(request);


    // CREATE
    const createResponse =
        await productApi.createProduct({

            name: 'Roblox',

            price: 254.34

        });


    expect(createResponse.status()).toBe(201);


    const createdProduct =
        await createResponse.json();


    const productId =
        createdProduct.id;


    console.log(
        'Created Product ID:',
        productId
    );


    // GET
    const getResponse =
        await productApi.getProduct(productId);


    expect(getResponse.status()).toBe(200);


    const product =
        await getResponse.json();


    console.log(
        'Product:',
        product
    );


    expect(product.name)
        .toBe('Roblox');


    expect(product.price)
        .toBe(254.34);


    // DELETE
    const deleteResponse =
        await productApi.deleteProduct(productId);


    expect(deleteResponse.status()).toBe(204);

});