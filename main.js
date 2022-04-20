const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const { names } = require("./test");

(async function main() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  try {
    await driver.get("https://megamon.world");
    await driver.sleep(20000);
    await driver
      .findElement(
        By.xpath(
          "/html/body/div/div/div/div/div[1]/div/div/div/div[1]/div/div/div[4]/div/div/div/div"
        )
      )
      .click();
    driver.findElement(By.name("username")).sendKeys(`$$$zorigoo`);
    driver
      .findElement(By.name("password"))
      .sendKeys(`munkhzorig0233`, Key.RETURN);
  } finally {
  }
})();
