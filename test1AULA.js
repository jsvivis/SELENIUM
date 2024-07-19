// Primeiro Teste
/*
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
(async function openChrome(){
    try {
        let options = new chrome.Options();
        let driver = await new Builder()
        .setChromeOptions(options)
        .forBrowser('chrome')
        .build();
        await driver.get('https://www.energisa.com.br/')
        // await driver.quit();
    } catch (error) {
        console.log(error);
}} )();   */

// Segundo Teste
/*
const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');
(async function segundotest(){
    try{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.google.com');
        await driver.getTitle();
        await driver.manage().getTimeouts({implicit:1000});
        let searchBox = await driver.findElement(By.name('q'));
        let searchButton = await driver.findElement(By.name('btnk'));
        await searchBox.sendKeys('energisa');
        await searchButton.click();
        let value = await searchBox.getAttribute('value');
        assert.deepStrictEqual(value, 'energisa');
        await driver.quit();
} catch(error){
    console.log(error);
}
})();  */

// Terceiro Teste

const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');
(async function segundotest(){
    try{
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://leitura.com.br/index.php?route=common/home');
        await driver.getTitle();
        await driver.manage().getTimeouts({implicit:1000});
        let searchBox = await driver.findElement(By.name('search'));
        let searchButton = await driver.findElement(By.class('btn btn-default btn-lg'));
        await searchBox.sendKeys('leitura');
        await searchButton.click();
        let value = await searchBox.getAttribute('value');
        assert.deepStrictEqual(value, 'Box Instrumentos Mortais');
        await driver.quit();
} catch(error){
    console.log(error);
}
})();  
