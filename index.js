const selenium = require('selenium-webdriver');

const driver = new selenium.Builder().forBrowser('chrome').build();

driver.get('https://www.google.com');