const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
require('dotenv').config();


test('Add a product to Cart and check Cart using AgentQL to locate elements', async ({ page }) => {

    test.setTimeout(60000);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.initialize(); // Initialize AgentQL

    await loginPage.login('standard_user', 'secret_sauce');

    // Validate successful login
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const inventory = new InventoryPage(page);
    //await inventory.initialize();
    await inventory.addItemToCart("Sauce Labs Backpack");

    await inventory.goToCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    const cart = new CartPage(page);
    const itemsExists = await cart.checkCartItems("Sauce Labs Backpack");
    expect(itemsExists).toBe(true);
 
    await cart.checkout();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.close();
});
