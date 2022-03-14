const {
  Builder,
  By,
  Key,
  until,
  promise,
  Keys,
} = require("selenium-webdriver");
const { DriverService } = require("selenium-webdriver/remote");

async function mseCrawler() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("http://megamon.fun");
    const selectLinkOpeninNewTab = Key.chord(Key.CONTROL, Key.RETURN);

    await driver.executeScript('window.open("http://megamon.fun");');


    //   await driver
    //     .findElement(
    //       By.xpath(
    //         `/html/body/div/div/div/div/div[1]/div/div/div/div[1]/div/div/div[4]/div/div/div/div`
    //       )
    //     )
    //     .click();
    //   await driver.findElement(By.name("username")).sendKeys("123");
    //   await driver.findElement(By.name("password")).sendKeys("123");
    //   await driver
    //     .findElement(
    //       By.className(
    //         `block panel button SimpleButton SimpleButton_v_flat SimpleButton_c_success_blue SimpleButton_use_text LoginContainer__action LoginContainer__sign_in_action SimpleButton_interactive`
    //       )
    //     )
    //     .click();
  } finally {
    // await driver.quit();
  }
}
mseCrawler();
