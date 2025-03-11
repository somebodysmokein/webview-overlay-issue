//var assert = require('assert');

import { expect, browser, $ } from '@wdio/globals'

describe('Scroll issue webview', () => {
  it('fidn element and scroll', async () => {

    const vendorsElt = await $('android=new UiSelector().text("Vendors:")');
    
    await vendorsElt.waitForDisplayed({ timeout: 5000 }); // Waits up to 5 seconds

    var sortFilter = await $('android=new UiSelector().text("Select")');

    //var filterBtn= await $('android=new UiSelector().text("Select")').scrollIntoView({ block: 'center', inline: 'nearest' });

    //await driver.execute('mobile: scroll', { element: await $('android=new UiSelector().text("Select")'), direction: 'down' });

    await driver.switchContext("WEBVIEW_com.browserstack.webviewtester");

    //const element = await driver.$('//div[@id="1"]/div[2]/img');
    //const element = await driver.$('//option[text()="Select"]');  /*Workign code*/
    const element = await driver.$('//div[@id="1"]/p');  
    await driver.executeScript("arguments[0].scrollIntoView();", [element]);

    await driver.switchContext("NATIVE_APP");

  //   await driver.execute('mobile: scroll', { 
  //     element: await $('android=new UiSelector().text("Select")'), 
  //     direction: 'down' 
  // });


    
// New Try
    var orderByBtn= await $('android=new UiSelector().text("iPhone 12")');

    orderByBtn.click();



  //Workign Code
    /* await sortFilter.click();

    var orderByBtn= await $('android=new UiSelector().text("Lowest to highest")');

    var text = orderByBtn.getText();
    console.log('Text:', text); */
    
    //assert(allProductsName.length > 0);

    ////*[normalize-space(text())="iPhone 12"]
  });
});
