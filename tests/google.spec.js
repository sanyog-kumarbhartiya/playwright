const{test,expect}=require('@playwright/test');

test('open google page & check title', async({page})=>
{
    await page.goto("https://www.google.com")
    const pageTitle = await page.title()
    console.log("page title is :",pageTitle)

    const pageUrl = page.url()
    console.log("page url is :", pageUrl)
}
   
)