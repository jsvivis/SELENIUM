// Terceiro Teste - Atividade de Prática durante a Aula

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
