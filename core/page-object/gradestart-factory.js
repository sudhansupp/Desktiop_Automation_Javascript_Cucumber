const { WebDriver, driver } = require('selenium-appium');
const Basepage = require('./gradestar/base-page.js');

class GradeStarFactory {
  /**
     * Brief description about the method openGradestar()
     * @param: applicationName , environmentType
     * @description: This method find the applicationName and environmentType as per the required appName and env send the capabilities
     * @return : Promise capabilities
     * @author: Rakesh
     */
  async openGradestar (appName) {
    // the AppID is hardcoded this should be dinamic with appName
    const baseInstance = new Basepage();
    const initializedVariables = await baseInstance.intializeEnvironment(appName);
    console.log('initializedVariables are : ', initializedVariables);

    const capabilities = {
      browserName: '',
      platformName: 'Windows',
      'appium:options':
            {
              automationName: 'Windows',
              platformVersion: '1.0.0',
              app: await initializedVariables.gradestarPath,
              deviceName: 'WindowsPC',
              noReset: true
            }
    };
    // await driver.startWithCapabilities(capabilities);
    await driver.startWithWebDriver(WebDriver);
    await driver.startWithCapabilities(capabilities);
  }
}
module.exports = new GradeStarFactory();
