const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
require('dotenv').config();


test('Login with valid credentials using AgentQL to locate elements', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.initialize(); // Initialize AgentQL

    await loginPage.login('standard_user', 'secret_sauce');

    // Validate successful login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.close();

});
