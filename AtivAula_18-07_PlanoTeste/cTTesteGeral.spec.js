// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CT_TesteGeral', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CT_TesteGeral', async function() {
    // Test name: CT_TesteGeral
    // Step # | name | target | value
    // 1 | open | https://leitura.com.br/index.php?route=common/home | 
    await driver.get("https://leitura.com.br/index.php?route=common/home")
    // 2 | setWindowSize | 1347x731 | 
    await driver.manage().window().setRect({ width: 1347, height: 731 })
    // 3 | click | name=search | 
    await driver.findElement(By.name("search")).click()
    // 4 | type | name=search | a biblioteca da meia noite
    await driver.findElement(By.name("search")).sendKeys("a biblioteca da meia noite")
    // 5 | mouseOver | css=.btn-default | 
    {
      const element = await driver.findElement(By.css(".btn-default"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 6 | click | css=.btn-default | 
    await driver.findElement(By.css(".btn-default")).click()
    // 7 | click | css=.product-layout:nth-child(1) .hidden-xs | 
    await driver.findElement(By.css(".product-layout:nth-child(1) .hidden-xs")).click()
    // 8 | runScript | window.scrollTo(0,401.6666564941406) | 
    await driver.executeScript("window.scrollTo(0,401.6666564941406)")
    // 9 | click | css=.right .cart-total | 
    await driver.findElement(By.css(".right .cart-total")).click()
  })
})
