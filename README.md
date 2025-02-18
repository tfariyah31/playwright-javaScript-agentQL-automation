# 📌 Playwright JavaScript Automation Framework with AgentQL Integration
## 🛠️ Project Overview
A Playwright JavaScript automation framework for testing e-commerce web application, integrated with AgentQL for querying web elements and their data using natural language.

## 🚀 Features
* ✅ Playwright for UI automation
* ✅ AgentQL SDK for querying web elements and their data using natural language.
* ✅ Self-healing capabilities via AgentQL SDK
* ✅ Page Object Model (POM) for maintainability

## 📂 Folder Structure
```bash
📦 playwright-agentql-automation/
├── 📂 tests/                     # Test files
│   ├── login.spec.js             
│   ├── inventory.spec.js
│   ├── cart.spec.js        
│
├── 📂 pages/                     # Page Object Model (POM)
│   ├── LoginPage.js              
│   ├── InventoryPage.js
│   ├── CartPage.js          
│
├── 📂 utils/                     # Helper utilities (if needed)
│
├── .gitignore                    
├── playwright.config.js          # Playwright configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation

```

## 📦 Installation Guide
1️⃣ Clone the Repository
```bash
git clone https://github.com/tfariyah31/playwright-javaScript-agentQL-automation.git
cd playwright-agentql-automation
```
2️⃣ Install Node.js (If Not Installed)
Check if Node.js is installed:
```bash
node -v
npm -v
If not, Download Node.js and install it.
```
3️⃣ Install VS Code Editor

## 🛠️ Installing & Configuring Playwright
1️⃣ Install Playwright
```bash
npm init playwright@latest
```
2️⃣ Verify Installation
Run:
```bash
npm playwright -v
```
## 🤖 Installing & Configuring AgentQL SDK
1️⃣ Install AgentQL
Get your [API_KEY](https://dev.agentql.com/api-keys) to make make AgentQL queries.
Install AgentQL DEbugger Chrome extention write and test your queries.
In your project folder, install AgentQL SDK
```bash
npm install agentql
```
Install Dependencies
```bash
agentql init
```
Set the AGENTQL_API_KEY environment variable(Windows terminal)
```bash
set AGENTQL_API_KEY=your-api-key
```

2️⃣ Set Up API Key for AgentQL in your project
AgentQL requires an API key for querying elements.
Create a .env file in the root directory of your project:
```bash
touch .env
```
Open .env and add your API key:
```bash
AGENTQL_API_KEY=your-agentql-api-key-here
```
## 🚀 Running the Tests
1️⃣ Run All Tests
```bash
npx playwright test
```
2️⃣ Run a Specific Test in headed mode in Chrome browser
```bash
npx playwright test Cart.spec.js --project=chromium --headed
```


## 👨‍💻 Author
👤 Tasnim Fariyah
🔗 [Github](https://github.com/tfariyah31)
🔗 [LinkedIn](https://www.linkedin.com/in/tasnim-fariyah/)

✅ Your Playwright automation framework with AgentQL is now ready! 🚀







