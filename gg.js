const { Builder, By, Key, until } = require("selenium-webdriver");
const static = require("./static");
exports.gg = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get(`${static.url_gg}`);
  try {
    for (let i = 1; i < static.usernames.length; i++) {
      await driver.executeScript(`window.open('${static.url_gg}');`);
    }
    

    await driver.manage().setTimeouts({ implicit: 60000 });

    for (let x = 0; x < static.usernames.length; x++) {
      driver.switchTo().window(windows[x]);
      driver
        .findElement(
          By.xpath(
            '//*[@id="rootUI"]/div/div/div/div[1]/div/div/div/div[1]/div/div/div[4]/div/div/div/div'
          )
        )
        .click();
      driver.manage().setTimeouts({ implicit: 2000 });

      driver
        .findElement(By.name("username"))
        .sendKeys(`${static.usernames[x]}`);

      driver
        .findElement(By.name("password"))
        .sendKeys(`munkhzorig0233`, Key.RETURN);
    }

    // tab switching then login
    // for (let y = 0; y < static.usernames.length; y++) {
    //   await driver.switchTo().window(windows[y]);
    //   await driver
    //     .findElement(By.name("username"))
    //     .sendKeys(`${static.usernames[y]}`);
    //   await driver
    //     .findElement(By.name("password"))
    //     .sendKeys(`munkhzorig0233`, Key.RETURN);
    // }

    // click tournaments
  } catch (err) {
    console.log(err);
  }
};
