const { wrap, configure } = require('agentql');
require('dotenv').config();

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.configureAgentQL();
    }

    async configureAgentQL() {
        configure({ apiKey: process.env.AGENTQL_API_KEY });
        this.page = await wrap(this.page);
        //this.page.setDefaultTimeout(60000);
    }

    async addItemToCart(productName) {
        // Replace spaces with underscores in productName
        const formattedProductName = productName.replace(/ /g, '_');

        // Log the formatted product name for debugging
        console.log(`Formatted product name: ${formattedProductName}`);

        // Query elements directly from AgentQL
        this.Inventory_Query = `
        {
            product_name_Add_to_cart_button(${formattedProductName})
        }`;

        // Query
        this.inventorayData = await this.page.queryElements(this.Inventory_Query);

        // Click the add to cart button
        await this.inventorayData.product_name_Add_to_cart_button.click();
        console.log('Item added to cart');
    }

    async goToCart() {
        // Query elements directly from AgentQL
        this.CartIcon_Query = `
        {
            shopping_cart_link(icon with number)
        }`;

        const response = await this.page.queryElements(this.CartIcon_Query);

        // Click the cart icon
        await response.shopping_cart_link.click();
    }

}

module.exports = { InventoryPage };
