//var assert = require('assert');

import { expect, browser, $ } from '@wdio/globals'

describe('Scroll issue webview', () => {
  it('find element and scroll', async () => {

    const vendorsElt = await $('android=new UiSelector().resourceId("root")');
    
    await vendorsElt.waitForDisplayed({ timeout: 5000 }); // Waits up to 5 seconds

    
    await driver.switchContext("WEBVIEW_com.browserstack.webviewtester");

    await driver.executeScript("document.querySelector('#root > div > footer').style.display='none'",[{}]);

    browser.pause(5000);


    await driver.executeScript("document.querySelector(\"#root > div > main > div > div:nth-child(3) > button\").scrollIntoView({ behavior: \"smooth\", block: \"center\" })",[{}]);

    await driver.switchContext("NATIVE_APP");


    var orderByBtn= await $('android=new UiSelector().text("iPhone 12 Pro Max Add to cart")');

    orderByBtn.click();

    await driver.switchContext("WEBVIEW_com.browserstack.webviewtester");

    await driver.executeScript("document.querySelector('#root > div > footer').style.display='block'",[{}]);

    await driver.switchContext("NATIVE_APP");

    browser.pause(5000);




  });
});
