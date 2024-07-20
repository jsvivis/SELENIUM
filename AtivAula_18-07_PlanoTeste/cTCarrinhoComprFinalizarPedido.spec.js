// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CT_CarrinhoCompr/FinalizarPedido', function() {
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
  it('CT_CarrinhoCompr/FinalizarPedido', async function() {
    // Test name: CT_CarrinhoCompr/FinalizarPedido
    // Step # | name | target | value
    // 1 | open | https://leitura.com.br/index.php?route=checkout/cart | 
    await driver.get("https://leitura.com.br/index.php?route=checkout/cart")
    // 2 | setWindowSize | 1347x731 | 
    await driver.manage().window().setRect({ width: 1347, height: 731 })
    // 3 | click | css=.accordion-toggle > .fa | 
    await driver.findElement(By.css(".accordion-toggle > .fa")).click()
    // 4 | click | id=input-postcode | 
    await driver.findElement(By.id("input-postcode")).click()
    // 5 | click | id=button-quote | 
    await driver.findElement(By.id("button-quote")).click()
    // 6 | click | css=.radio:nth-child(3) input | 
    await driver.findElement(By.css(".radio:nth-child(3) input")).click()
    // 7 | click | name=shipping_method | 
    await driver.findElement(By.name("shipping_method")).click()
    // 8 | click | id=button-shipping | 
    await driver.findElement(By.id("button-shipping")).click()
    // 9 | click | linkText=Finalizar pedido | 
    await driver.findElement(By.linkText("Finalizar pedido")).click()
    // 10 | click | id=input-email | 
    await driver.findElement(By.id("input-email")).click()
    // 11 | click | id=input-password | 
    await driver.findElement(By.id("input-password")).click()
    // 12 | click | css=.panel-body .col-sm-6:nth-child(1) | 
    await driver.findElement(By.css(".panel-body .col-sm-6:nth-child(1)")).click()
  })
})