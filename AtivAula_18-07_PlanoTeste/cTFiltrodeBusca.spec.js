// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CT_Filtro de Busca', function() {
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
  it('CT_Filtro de Busca', async function() {
    // Test name: CT_Filtro de Busca
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://leitura.com.br/")
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
    // 9 | click | css=.head-one .row | 
    await driver.findElement(By.css(".head-one .row")).click()
    // 10 | mouseOver | css=.input-group-btn > .btn-default | 
    {
      const element = await driver.findElement(By.css(".input-group-btn > .btn-default"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 11 | mouseOut | css=.input-group-btn > .btn-default | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 12 | type | name=search | jane austen
    await driver.findElement(By.name("search")).sendKeys("jane austen")
    // 13 | sendKeys | name=search | ${KEY_ENTER}
    await driver.findElement(By.name("search")).sendKeys(Key.ENTER)
    // 14 | click | css=.product-layout:nth-child(3) .hidden-xs | 
    await driver.findElement(By.css(".product-layout:nth-child(3) .hidden-xs")).click()
    // 15 | runScript | window.scrollTo(0,401.6666564941406) | 
    await driver.executeScript("window.scrollTo(0,401.6666564941406)")
    // 16 | click | css=.head-one .row | 
    await driver.findElement(By.css(".head-one .row")).click()
    // 17 | type | name=search | suma de letras
    await driver.findElement(By.name("search")).sendKeys("suma de letras")
    // 18 | click | css=.fa-search | 
    await driver.findElement(By.css(".fa-search")).click()
    // 19 | click | css=.hidden-sm | 
    await driver.findElement(By.css(".hidden-sm")).click()
    // 20 | click | id=cancel-avise | 
    await driver.findElement(By.id("cancel-avise")).click()
    // 21 | click | css=.head-one .row | 
    await driver.findElement(By.css(".head-one .row")).click()
    // 22 | type | name=search | galera
    await driver.findElement(By.name("search")).sendKeys("galera")
    // 23 | click | css=.fa-search | 
    await driver.findElement(By.css(".fa-search")).click()
    // 24 | click | css=.product-layout:nth-child(1) .hidden-xs | 
    await driver.findElement(By.css(".product-layout:nth-child(1) .hidden-xs")).click()
    // 25 | runScript | window.scrollTo(0,401.6666564941406) | 
    await driver.executeScript("window.scrollTo(0,401.6666564941406)")
  })
})