import { test, expect} from '@playwright/test'


test('end to end testing', async({page})=>{

    await page.goto('https://driffle.com/')

    const logo = page.locator('[data-test-id="header-logo"]').first();

    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/')

    const searchbar = page.locator('[data-test-id="header-search-input"]');
    await expect(searchbar).toBeVisible();

    const location = page.locator('[data-test-id="header-currency-language-button"]')
    await expect(location).toBeVisible();
    
    const cart = page.locator('[data-test-id="header-cart-button"]');
    await expect(cart).toBeVisible();
    await expect(cart).toHaveAttribute('href', '/cart');

    const downloadAppBtn = page.getByRole('button', {name: 'Download App'});
    await expect(downloadAppBtn).toBeVisible();

    const loginBtn = page.locator('[data-test-id="dekstop-login-button"]');
    await expect(loginBtn).toBeVisible();

    const games = page.locator('[data-test-id="subheader-item-games"]');
    await expect(games).toBeVisible();

    const giftCard = page.locator('[data-test-id="subheader-item-gift-cards"]');
    await expect(giftCard).toBeVisible();

    const gamingGiftCards = page.locator('[data-test-id="subheader-item-gaming-gift-cards"]');
    await expect(gamingGiftCards).toBeVisible();

    const subscription = page.locator('[data-test-id="subheader-item-subscriptions"]');
    await expect(subscription).toBeVisible();

    const software = page.locator('[data-test-id="subheader-item-softwares"]')
    await expect(software).toBeVisible();

    const store = page.locator('a:has([data-test-id="subheader-link-Store"])');
    await expect(store).toBeVisible();
    await expect(store).toHaveAttribute('href', '/store')


    const upcomings = page.locator('a:has([data-test-id="subheader-link-Upcoming"])');
    await expect(upcomings).toBeVisible();
    await expect(upcomings).toHaveAttribute('href', '/store?preOrder=true&page=1')

    const topups = page.locator('a:has([data-test-id="subheader-link-Topups"])');
    await expect(topups).toBeVisible();
    await expect(topups).toHaveAttribute('href', '/topup')

    const saveWithPlus = page.locator('a:has([data-test-id="subheader-link-Save with "])');
    await expect(saveWithPlus).toBeVisible();
    await expect(saveWithPlus).toHaveAttribute('href', '/plus')

    const slasye = page.locator('a:has([data-test-id="subheader-link-Slashy"])');
    await expect(slasye).toBeVisible();
    await expect(slasye).toHaveAttribute('href', '/slashy' )

    // const carousel = page.locator('#carousel-banner-image').first();
    // await expect(carousel).toBeVisible();
    

    // const recentalyView = page.locator('[data-test-id="homepage-recently-viewed"]')
    // console.log('Count:', await recentalyView.count());
    // await recentalyView.scrollIntoViewIfNeeded();
    // await expect(recentalyView).toBeVisible();

    const recommendedProd = page.locator('[data-test-id="homepage-recommended-for-you"]');
    await recommendedProd.scrollIntoViewIfNeeded();

    // const recommendedProducts = page.locator('[data-test-id="homepage-recommended-for-you-product-card"]').first();
    // await recommendedProducts.scrollIntoViewIfNeeded();
    // await expect(recommendedProducts).toBeVisible();
    // const productLink = recommendedProducts.locator('a').first();
    // await expect(productLink).toHaveAttribute('href', '/marvels-spider-man-remastered-pc-steam-digital-code-p9879086')

    const recommendedProducts = page.locator(
  '[data-test-id="homepage-recommended-for-you-product-card"]'
);

await recommendedProducts.first().scrollIntoViewIfNeeded();

await expect(recommendedProducts.first()).toBeVisible();

const count = await recommendedProducts.count();

expect(count).toBeGreaterThan(0);

for (let i = 0; i < count; i++) {
  const card = recommendedProducts.nth(i);

  await expect(
    card.locator('[data-test-id="product-card-title"]')
  ).toBeVisible();

  await expect(
    card.locator('[data-test-id="product-card-price"]')
  ).toBeVisible();

  const link = card.locator('a').first();

  await expect(link).toHaveAttribute('href', /.+/);
}

    



})