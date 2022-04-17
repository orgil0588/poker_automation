const { Builder, By, Key, until } = require("selenium-webdriver");
const static = require("./static");
exports.gg = async () => {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get(`${static.url_gg}`);
  try {
    for (let i = 1; i < static.usernames.length; i++) {
      await driver.executeScript(`window.open('${static.url_gg}');`);
    }

    await driver.manage().setTimeouts({ implicit: 300000 });
    let windows = await driver.getAllWindowHandles();


    for (let x = 0; x < static.usernames.length; x++) {
      await driver.switchTo().window(windows[x]);
      await driver
        .findElement(
          By.xpath(
            '//*[@id="rootUI"]/div/div/div/div[1]/div/div/div/div[1]/div/div/div[4]/div/div/div/div'
          )
        )
        .click();
    }

    // 50sec wait
    await driver.manage().setTimeouts({ implicit: 10000 });

    // tab switching then login
    for (let y = 0; y < static.usernames.length; y++) {
      await driver.switchTo().window(windows[y]);
      await driver
        .findElement(By.name("username"))
        .sendKeys(`${static.usernames[y]}`);
      await driver
        .findElement(By.name("password"))
        .sendKeys(`munkhzorig0233`, Key.RETURN);
    }

    // click tournaments
  } catch (error) {
    if (error) {
      console.log(error);
      // await driver.quit();
    }
  }
};
