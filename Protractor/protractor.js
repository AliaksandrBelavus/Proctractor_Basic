describe("Protractor Simply Test", function () {

  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
});

  it("Correct language is displayed", async function () {
    await browser.get("https://www.matrix.usag.it/");
    //Choosing a language
    await element(by.css('div[class="languageselector ng-scope"]')).click();
    await element(by.css("span[ng-click=\"changeLanguage('en')\"]")).click();
    expect(await element(by.css('div[class="languageselector ng-scope"] > span')).getText()).toEqual("EN")
  });

  it("Possibility to choose the brand and model of the van", async function () {
    await browser.get("https://www.matrix.usag.it/");
    // Start a project
    await element(by.xpath("//span[contains(text(),'start a project')]")).click();
    await browser.manage().setTimeouts({ implicit: 50000 });
    await element(by.xpath('//ul[@class="list_radio vehicules"]/li[1]')).click();
    await element(by.xpath('//li[@title="Next"]')).click();
    expect(await element(by.xpath('//p[@class="ng-binding ng-scope"]')).getText()).toEqual("2Select brand and model of your van")
  });

  it(" How to reach us page is displayed", async function () {
    await browser.get("https://www.matrix.usag.it/");
    await element(by.xpath('//a[@href="https://usag.it/en/chisiamo/comeraggiungerci"]')).click();
    expect(await element(by.xpath('//h1/span')).getText()).toEqual("Where we are")
  });
});