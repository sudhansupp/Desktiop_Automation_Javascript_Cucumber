const { By2, driver } = require('selenium-appium');
const { until } = require('selenium-webdriver');

class MainView {
  constructor () {
    this.garlic_button = By2.xpath('/Window/Custom[3]/Pane/Group[1]/Button[1]/Text');
    this.onions_Button = By2.xpath('/Window/Custom[3]/Pane/Group[1]/Button[2]/Text');
    this.parsley_Button = By2.xpath('/Window/Custom[3]/Pane/Group[1]/Button[3]/Text');
    this.logout_button = By2.xpath('/Window/Custom[3]/Button[2]/Text');
    this.logout_yes = By2.nativeAccessibilityId('btnYes');
    this.fieldTag = By2.nativeAccessibilityId('FieldTagNumber');
    this.closeGradestar = By2.nativeName('Close');
    this.yesButton = By2.nativeAccessibilityId('btnYes');
    this.cancel = By2.xpath('/Window/Custom[3]/Button[1]');
  }

  /**
         * Brief description about the method getListOfCropsInTabs()
         * @param: tabNumber
         * @description: It tries to find the text of element as per the actual text in required field returns as string, once the element loaded in the page.
         * If match not found then it returns null
         * @return : returns the inner text of the element
         * @author: Rakesh
         */
  async getListOfCropsInTabs (tabId) {
    let continuesearch = true;
    const names = [];
    let nextnum = 1;
    while (continuesearch) {
      try {
        const nameRespose = await By2.nativeXpath('/Window/Custom[3]/Pane/Group[' + tabId + ']/Button[' + nextnum + ']/Text').getText();
        await names.push(nameRespose);
        nextnum++;
      } catch (e) {
        continuesearch = false;
      }
    }
    return await names;
  }

  /**
     * Brief description about the method navigateToCropDetailsByTabName()
     * @param: TabNumber , CropNumber
     * @description: This method find the TabName and CropName as per the required TabId and CropId send to the respective element
     * If match not found then it returns null
     * @return : Object
     * @author: Rakesh
     */
  async navigateToCropDetailsByTabName (tabId, cropId) {
    console.log('the name of tab: ' + tabId);
    console.log('the name of crop:' + cropId);
    const locator = By2.nativeXpath('/Window/Custom[3]/Pane/Group[' + tabId + ']/Button[' + cropId + ']/Text');
    await driver.wait(until.elementLocated(locator), 50000);
    await locator.click();
  }

  /**
     * Brief description about the method logoutFromGradestar()
     * @param: Locator
     * @description: It tries to click on the element once it loaded in the page
     * @return : null
     * @author: Rakesh
     */
  async logoutFromGradestar () {
    const logOutButton = driver.wait(until.elementLocated(this.logout_button), 200000);
    await logOutButton.click();
    const yesButton = driver.wait(until.elementLocated(this.logout_yes), 200000);
    await yesButton.click();
  }

  /**
     * Brief description about the method closeGradestarApplication()
     * @param: Locator
     * @description: It tries to click on the element once it loaded in the page
     * @return : null
     * @author: Rakesh
     */
  async closeGradestarApplication () {
    const logOutButton = driver.wait(until.elementLocated(this.closeGradestar), 200000);
    await logOutButton.click();
    const yesButton = driver.wait(until.elementLocated(this.yesButton), 30000);
    await yesButton.click();
  }
}
module.exports = new MainView();
