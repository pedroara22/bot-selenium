const selenium = require('selenium-webdriver');

const driver = new selenium.Builder().forBrowser('chrome').build();

var url = "";

async function main() {
    await driver.get('https://tuamaeaquelaursa.com')
    await driver.findElement(selenium.By.xpath('//*[@id="header"]/div[2]/form/div[2]/button')).click();
    let btn = await driver.findElement(selenium.By.xpath('/html/body/div/section/div/div'))
    await driver.wait(selenium.until.elementIsVisible(btn), 5000);
    await driver.getCurrentUrl().then(email => {
        utl = email.split('').splice(29).join('')+"@tuamaeaquelaursa.com";
    });
}

main()