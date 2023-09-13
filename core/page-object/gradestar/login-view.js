const { By2, driver } = require('selenium-appium');
const { until } = require('selenium-webdriver');
const Basepage = require('./base-page.js');

class LoginView {
  constructor () {
    this.user_input = By2.nativeAccessibilityId('ucUserId');
    this.password_input = By2.nativeAccessibilityId('ucPassword');
    this.login_button = By2.nativeClassName('Button');
  }

  /**
     * Brief description about the method login()
     * @param: username , password
     * @description: This method find the username and password as per the required user and pw, then send the respective element
     * If match not found then it returns false
     * @return : Promise Object
     * @author: Rakesh
     */
  async login (user, pw) {
    await this.user_input.sendKeys(user);
    await this.password_input.sendKeys(pw);
    await this.login_button.click();
  }

  /**
     * Brief description about the method loginToGradestar()
     * @param: Gradestar Type
     * @description: This method find the type of Gradestar as per the required "gradestarType" send the respective element
     * If match not found then it returns failed
     * @return : Promise Object
     * @author: Rakesh
     */
  async loginToGradestar (gradestarType) {
    const baseInstance = new Basepage();
    const initializedVariables = await baseInstance.intializeEnvironment(gradestarType);
    await driver.wait(until.elementLocated(this.user_input), 3000000);
    await this.user_input.sendKeys(await initializedVariables.username);
    const passwordInput = driver.wait(until.elementLocated(this.password_input), 3000000);
    await passwordInput.sendKeys(await initializedVariables.password);
    const logInButton = driver.wait(until.elementLocated(this.login_button), 3000000);
    await logInButton.click();
  }

  /**
     * Brief description about the method loginToGradestarInSpecificEnv()
     * @param: Gradestar Type , Environment
     * @description: This method find the type of Gradestar and Environment as per the required "gradestarType & env", then send to the respective element
     * If match not found then it returns failed
     * @return : Promise Object
     * @author: Rakesh
     */
  async loginToGradestarInSpecificEnv (gradestarType, env) {
    const baseInstance = new Basepage();
    const initializedVariables = await baseInstance.intializeEnvironment(gradestarType, env);
    await this.user_input.sendKeys(await initializedVariables.username);
    await this.password_input.sendKeys(await initializedVariables.password);
    await this.login_button.click();
  }
}
module.exports = new LoginView();
