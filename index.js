const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const { names } = require("./data");

(async function main() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  try {
    for (let i = 0; i < names.length; i++) {
      await driver.get("https://megamon.world");
      await driver.switchTo().newWindow("tab");
    }

    await driver.sleep(60000);
    let windows = await driver.getAllWindowHandles();

    for (let x = 0; x < names.length; x++) {
      await driver.switchTo().window(windows[x]);
      await driver.sleep(1000);
    }

    for (let x = 0; x < names.length; x++) {
      await driver.switchTo().window(windows[x]);
      await driver.sleep(1000);
      await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div/div/div[1]/div/div/div/div[1]/div/div/div[4]/div/div/div/div"
          )
        )
        .click();
    }
    for (let y = 0; y < names.length; y++) {
      await driver.switchTo().window(windows[y]);
      await driver.findElement(By.name("username")).sendKeys(`${names[y]}`);
      await driver
        .findElement(By.name("password"))
        .sendKeys(`munkhzorig0233`, Key.RETURN);
    }
  } finally {
  }
})();
