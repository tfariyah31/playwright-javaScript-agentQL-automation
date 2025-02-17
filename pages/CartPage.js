const { wrap, configure } = require('agentql');
require('dotenv').config();

class CartPage {
    constructor(page) {
        this.page = page;
        this.configureAgentQL();
    }

    async configureAgentQL() {
        configure({ apiKey: process.env.AGENTQL_API_KEY });
        this.page = await wrap(this.page);
        //this.page.setDefaultTimeout(60000);
    }

    async checkCartItems(productName) {
        // Replace spaces with underscores in productName
        const formattedProductName = productName.replace(/ /g, '_');

        // Log the formatted product name for debugging
        console.log(`Formatted product name: ${formattedProductName}`);

        // Query elements directly from AgentQL
        this.CartItems_Query = `
        {
            product_name_link (${formattedProductName})
        }`;

        const response = await this.page.queryData(this.CartItems_Query);

        console.log(response.product_name_link);
        if(response.product_name_link === productName){
            console.log('Item present in cart');
            return true;
        } else{
            console.log('Item not present in cart');
            return false;
        }
    }

    async checkout() {
        // Query elements directly from AgentQL
        this.Checkout_Query = `
        {
            checkout
        }`;

        const response = await this.page.queryElements(this.Checkout_Query);

        await response.checkout.click();
    }

}
module.exports = { CartPage };