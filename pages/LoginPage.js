const { wrap, configure } = require('agentql');
require('dotenv').config();

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async initialize() {
        // Configure AgentQL API key
        configure({ apiKey: process.env.AGENTQL_API_KEY });

        // Wrap the Playwright page for AgentQL querying
        this.page = await wrap(this.page);
        //this.page.setDefaultTimeout(60000);

        // Define AgentQL query to get login elements
        this.LOGIN_PAGE_QUERY = `
        {  
            username
            password
            login
        }`;

        // Query elements
        this.elements = await this.page.queryElements(this.LOGIN_PAGE_QUERY);
        console.log(this.elements);
    }
    
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.elements.username.fill(username);
        await this.elements.password.fill(password);
        await this.elements.login.click();
    }
}

module.exports ={ LoginPage };
