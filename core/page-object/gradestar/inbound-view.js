const { By2, driver } = require('selenium-appium');
const { until } = require('selenium-webdriver');

class InboundView {
  constructor () {
    this.garlic_button = By2.xpath('/Window/Custom[3]/Pane/Group[1]/Button[1]/Text');
    this.onions_Button = By2.xpath('/Window/Custom[3]/Pane/Group[1]/Button[2]/Text');
    this.parsley_Button = By2.xpath('/Window/Custom[3]/Pane/Group[1]/Button[3]/Text');
    this.fieldTag = By2.nativeAccessibilityId('FieldTagNumber');
    this.inbound_CancelButton = By2.nativeAccessibilityId('Cancel');
    this.inbound_ReceiveButton = By2.nativeAccessibilityId('Receive');
    this.popup_Message = By2.nativeAccessibilityId('xMessage');
    this.ok_Button = By2.nativeAccessibilityId('btnOk');
    this.intended_UseEstimatedId = By2.nativeAccessibilityId('IntendedUseEstimatedId');
    this.garlic_Juice = By2.nativeName('GJ - Garlic Juice');
    this.grower_LoadNumField = By2.nativeAccessibilityId('GrowerLoadNum');
    this.field_List1 = By2.nativeName('Field #'); // "BlockVarietyId"
    this.field_List = By2.nativeAccessibilityId('BlockVarietyId');
    this.field_option = By2.nativeName('509-22   (2022)');
    this.fieldTimeOut_textfield1 = By2.nativeName('Field time-out');
    this.fieldTimeOut_textfield2 = By2.nativeAccessibilityId('timePart');
    this.fieldTimeOut_textfield3 = By2.nativeXpath("//Text[@HelpText='Time is required']");
    this.fieldTimeIn_textfield = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[2]/Custom[1]/Edit');
    this.fieldTimeOut_textfield = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[2]/Custom[2]/Edit');
    this.hauler_dropdown1 = By2.nativeName('Hauler');// "HaulerId"
    this.hauler_dropdown = By2.nativeAccessibilityId('HaulerId');
    this.selectOption_haulerDropdown = By2.nativeName('Sensient Natural Ingredients LLC (00001)');
    this.selectOption_haulerDropdown1 = By2.nativeName('Sensient Natural Ingredients LLC (00001)');
    this.next_Button = By2.nativeAccessibilityId('Next');
    this.siftNumber_TextField = By2.nativeAccessibilityId('ShiftNumber');
    this.dump_button = By2.nativeAccessibilityId('Dump');
    this.finish_button = By2.nativeAccessibilityId('Finish');
    this.onions_Juice = By2.nativeName('OJ - Onion Juice');
    this.field_optionOnionInbound = By2.nativeName('1001-23   (2023)');
    this.parsley_Organic = By2.nativeName('PORG - Parsley Organic');
    this.onions_Organic = By2.nativeName('OORG - Onion Organic');// OORG - Onion Organic
    this.field_optionParsleyInbound = By2.nativeName('8059-P2A23   (2023)');
    this.gross_field = By2.nativeName('Gross');
    this.gross_field1 = By2.nativeAccessibilityId('txt');
    this.fieldTimeOut_textfield1 = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[6]/Custom[2]/Edit');
    this.field_option1 = By2.nativeName('505-22   (2022)');
    this.field_option2 = By2.nativeName('1004-23   (2023)');
    this.garlic_DehySold = By2.nativeName('GDS - Garlic Dehy Sold');
    this.grade_Button1 = By2.nativeAccessibilityId('Grade');
    this.grade_Button = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Custom[3]/Text');
    this.dump_Tab = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Custom[2]/Text');
    // this.inTransit_Tab = By2.xpath('/Window/Custom[1]/Tab/TabItem[1]'); // appium
    this.inTransit_Tab = By2.nativeAccessibilityId('tabInTransit');// sdk //"tabInTransit"
    this.inProgress_Tab = By2.xpath('/Window/Custom[1]/Tab/TabItem[2]');
    this.inawaitingGrades_Tab = By2.xpath('/Window/Custom[1]/Tab/TabItem[3]');
    this.inTransitTab_List = By2.xpath('/Window/Custom[1]/Tab/TabItem[1]/List/ListItem[1]');
    this.inProgressTab_List = By2.xpath('/Window/Custom[1]/Tab/TabItem[1]/Listview[1]/ListItem[1]');
    this.arrive_date = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[6]/Custom[2]/Edit');
    this.print_button = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Button[1]'); //
    // this.fieldTimeIn_date = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[2]/Custom[1]/Edit[1]');
    this.fieldTimeIn_date = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[2]/Custom[1]/DatePicker/Edit');
    this.fieldTimeOut_date = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[2]/Custom[2]/DatePicker/Edit');
    this.inspection_Time = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[2]/Custom[1]/Edit');
    this.inspector_Name = By2.nativeAccessibilityId('Inspector-Value');
    this.dirt_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[3]/Edit[1]');
    this.cull_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[3]/Edit[2]');
    this.solids_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[3]/Edit[3]');
    this.master1_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[5]/Edit[1]');
    this.master2_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[5]/Edit[2]');
    this.moistureInWt_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[6]/Edit[1]');
    this.moistureOutWt_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[6]/Edit[2]');
    this.defectSample_TextField = By2.xpath('/Window/Custom[3]/Custom[2]/Custom[1]/Group[6]/Edit[4]');
  }

  /**
         * Brief description about the method clickOnReceiveButton()
         * @param: NA
         * @description: It will click on the Receive Button once it loaded in the page.
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnReceiveButton () {
    const receiveButtonofCrop = driver.wait(until.elementLocated(this.inbound_ReceiveButton), 100000);
    await receiveButtonofCrop.click();
  }

  /**
         * Brief description about the method handlePopUp()
         * @param: Locator
         * @description: It will handle the popup,find the text of  element as per the actual text in required field returns as string.
         * once the element loaded in the page.
         * @return : String
         * @author: Rakesh
         */
  async handlePopUp (handlePopUpMessage) {
    handlePopUpMessage = driver.wait(until.elementLocated(this.popup_Message), 200000);
    await handlePopUpMessage.getText().then((value) => {
      console.log('the text of popup :  ' + value);
      const expectedText = handlePopUpMessage.getText();
      console.log('The Required field are validated:' + expectedText);
    });
    const okButton = driver.wait(until.elementLocated(this.ok_Button), 100000);
    await okButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofInboundGarlic()
         * @param: NA
         * @description: It will enter the value in required field, once the element loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofInboundGarlic () {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 20000);
    await fieldTag.sendKeys('65000');
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 20000);
    await intendedUseEstimatedId.click();
    const garlicJuice = driver.wait(until.elementLocated(this.garlic_Juice), 20000);
    await garlicJuice.click();
    const receiveButton = driver.wait(until.elementLocated(this.inbound_ReceiveButton), 20000);
    await receiveButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofPurchaseGarlic()
         * @param: NA
         * @description: It will enter the value,click operation and handle dropdown in required field, once the element loaded in the page.
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofPurchaseGarlic () {
    const growerLoadNumTextField = driver.wait(until.elementLocated(this.grower_LoadNumField), 20000);
    await growerLoadNumTextField.sendKeys('A50001');
    const fielddropdownList = driver.wait(until.elementLocated(this.field_List), 20000);
    await fielddropdownList.click();
    const selectOption = driver.wait(until.elementLocated(this.field_option), 20000);
    await selectOption.click();
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 20000);
    await fieldTimeOutTextField.sendKeys('0615');
    const haulerDropdownList = driver.wait(until.elementLocated(this.hauler_dropdown), 20000);
    await haulerDropdownList.click();
    const selectOptionfromHaulerDropdown = driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 20000);
    await selectOptionfromHaulerDropdown.click();
    const nextButton2 = driver.wait(until.elementLocated(this.next_Button), 20000);
    await nextButton2.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofDumpGarlic()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofDumpGarlic () {
    const siftNumberTextField = driver.wait(until.elementLocated(this.siftNumber_TextField), 20000);
    await siftNumberTextField.sendKeys('123');
    const dumpButton = driver.wait(until.elementLocated(this.dump_button), 20000);
    await dumpButton.click();
  }

  /**
         * Brief description about the method datFlowInGarlicInboundPage()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async datFlowInGarlicInboundPage () {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 50000);
    await fieldTag.sendKeys('70001');
    const fielddrodownList = driver.wait(until.elementLocated(this.field_List), 50000);
    await fielddrodownList.click();
    const selectOption = driver.wait(until.elementLocated(this.field_option), 50000);
    await selectOption.click();
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 50000);
    await intendedUseEstimatedId.click();
    const garlicJuice = driver.wait(until.elementLocated(this.garlic_Juice), 50000);
    await garlicJuice.click();
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 50000);
    await fieldTimeOutTextField.sendKeys('1200');
    const haulerDropdownList = driver.wait(until.elementLocated(this.hauler_dropdown), 50000);
    await haulerDropdownList.click();
    const selectOptionfromHaulerDropdown = driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 50000);
    await selectOptionfromHaulerDropdown.click();
    const FinishButton = driver.wait(until.elementLocated(this.finish_button), 50000);
    await FinishButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofInboundOnions()
         * @param: NA
         * @description: It wiill enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofInboundOnions () {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 20000);
    await fieldTag.sendKeys('66001');
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 20000);
    await intendedUseEstimatedId.click();
    const onionJuice = driver.wait(until.elementLocated(this.onions_Juice), 20000);
    await onionJuice.click();
    const receiveButton = driver.wait(until.elementLocated(this.inbound_ReceiveButton), 20000);
    await receiveButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofPurchaseOnions()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofPurchaseOnions () {
    const growerLoadNumTextField = driver.wait(until.elementLocated(this.grower_LoadNumField), 20000);
    await growerLoadNumTextField.sendKeys('B5001');
    const fielddropdownList = driver.wait(until.elementLocated(this.field_List), 20000);
    await fielddropdownList.click();
    const selectOption = driver.wait(until.elementLocated(this.field_optionOnionInbound), 20000);
    await selectOption.click();
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 30000);
    await fieldTimeOutTextField.sendKeys('0715');
    const haulerDropdownList = driver.wait(until.elementLocated(this.hauler_dropdown), 20000);
    await haulerDropdownList.click();
    const selectOptionfromHaulerDropdown = driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 20000);
    await selectOptionfromHaulerDropdown.click();
    const nextButton = driver.wait(until.elementLocated(this.next_Button), 20000);
    await nextButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofDumpOnions()
         * @param: NA
         * @description: It will enter the value sift TextField and click on dump button, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofDumpOnions () {
    const siftNumberTextField = driver.wait(until.elementLocated(this.siftNumber_TextField), 20000);
    await siftNumberTextField.sendKeys('456');
    const dumpButton = driver.wait(until.elementLocated(this.dump_button), 20000);
    await dumpButton.click();
  }

  /**
         * Brief description about the method datFlowInOnionsInboundPage()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async datFlowInOnionsInboundPage () {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 20000);
    await fieldTag.sendKeys('54321');
    const fielddrodownList = driver.wait(until.elementLocated(this.field_List), 20000);
    await fielddrodownList.click();
    const selectOption = driver.wait(until.elementLocated(this.field_optionOnionInbound), 20000);
    await selectOption.click();
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 20000);
    await intendedUseEstimatedId.click();
    const onionsJuice = driver.wait(until.elementLocated(this.onions_Juice), 20000);
    await onionsJuice.click();
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 20000);
    await fieldTimeOutTextField.sendKeys('1200');
    const haulerDropdownList = driver.wait(until.elementLocated(this.hauler_dropdown), 20000);
    await haulerDropdownList.click();
    const selectOptionfromHaulerDropdown = driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 20000);
    await selectOptionfromHaulerDropdown.click();
    const FinishButton = driver.wait(until.elementLocated(this.finish_button), 20000);
    await FinishButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofInboundParsley()
         * @param: NA
         * @description: It tries to enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofInboundParsley () {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 20000);
    await fieldTag.sendKeys('98765');
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 20000);
    await intendedUseEstimatedId.click();
    const parsleyOrganic = driver.wait(until.elementLocated(this.parsley_Organic), 20000);
    await parsleyOrganic.click();
    const receiveButton = driver.wait(until.elementLocated(this.inbound_ReceiveButton), 20000);
    await receiveButton.click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofPurchaseParsley()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofPurchaseParsley () {
    await driver.wait(until.elementLocated(this.grower_LoadNumField), 50000).sendKeys('70001');
    await driver.wait(until.elementLocated(this.field_List), 50000).click();
    await driver.wait(until.elementLocated(this.field_optionParsleyInbound), 50000).click();
    await driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 50000).sendKeys('0715');
    await driver.wait(until.elementLocated(this.next_Button), 50000).click();
  }

  /**
         * Brief description about the method dataEnterIntoRequiredFieldofDumpParsley()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async dataEnterIntoRequiredFieldofDumpParsley () {
    await driver.wait(until.elementLocated(this.siftNumber_TextField), 50000).sendKeys('789');
    await driver.wait(until.elementLocated(this.dump_button), 50000).click();
  }

  /**
         * Brief description about the method datFlowInParsleyInboundPage()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async datFlowInParsleyInboundPage () {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 15000);
    await fieldTag.sendKeys('87656');
    const fielddrodownList = driver.wait(until.elementLocated(this.field_List), 15000);
    await fielddrodownList.click();
    const selectOption = driver.wait(until.elementLocated(this.field_optionParsleyInbound), 15000);
    await selectOption.click();
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 15000);
    await intendedUseEstimatedId.click();
    const parsleyOrganic = driver.wait(until.elementLocated(this.parsley_Organic), 15000);
    await parsleyOrganic.click();
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 15000);
    await fieldTimeOutTextField.sendKeys('1300');
    const FinishButton = driver.wait(until.elementLocated(this.finish_button), 60000);
    await FinishButton.click();
  }

  /**
         * Brief description about the method verifyPresneceOfLabelsInInboundPage()
         * @param: expected Locator
         * @description: It tries to find the text of  element as per the actual text in required field returns as string, once the element loaded in the page.
         * If match not found then it returns null
         * @return : returns the inner text of the element
         * @author: Rakesh
         */
  async verifyPresneceOfLabelsInInboundPage (expectedText) {
    await By2.nativeName(expectedText).getText().then((value) => {
      console.log('the Validate lebels is:  ' + value);
      console.log('expected text : ' + expectedText);
    });
  }

  /**
         * Brief description about the method verifyMandatoryFieldsInInboundPage()
         * @param: AttributeName ,  LocatorName
         * @description: It tries to find the attribute value based upon the locator and attribute name, once the element loaded in the page.
         * If match not found then it returns null
         * @return : returns the attribute value of the element
         * @author: Rakesh
         */
  // Note: This meethod is not in use due to getAttribute method is not working. Please ignore this method
  async verifyMandatoryFieldsInInboundPage (expectedText, locatorName) {
    await new Promise(resolve => setTimeout(resolve, 30000));
    const element = await driver.findElement(By2.nativeXpath(locatorName)).getAttribute('HelpText').then((value) => {
      console.log('result of getAttribute:  ' + value);
      // assert.isTrue(value === expectedText); // no asserts in pageobject
    });
    await driver.findElement(By2.nativeAccessibilityId(locatorName));
    await element.getAttribute('HelpText');
    await By2.nativeAccessibilityId(locatorName).getAttribute('').then((value) => {
      console.log('the value of expected' + expectedText);
      console.log('the value of value is:  ' + value);
      // return assert.isTrue(value);// no asserts in pageobject
    });
  }

  /**
         * Brief description about the method fillUpRequiredFieldofNewPurchaseLoadGarlic()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async fillUpRequiredFieldofNewPurchaseLoadGarlic () {
    await driver.wait(until.elementLocated(this.grower_LoadNumField), 100000).sendKeys('A50001');
    await driver.wait(until.elementLocated(this.field_List), 100000).click();
    await driver.wait(until.elementLocated(this.field_option1), 100000).click();
    await driver.wait(until.elementLocated(this.intended_UseEstimatedId), 50000).click();
    await driver.wait(until.elementLocated(this.garlic_DehySold), 50000).click();
    await driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 50000).sendKeys('0815');
    await driver.wait(until.elementLocated(this.hauler_dropdown), 50000).click();
    await driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 50000).click();
  }

  /**
         * Brief description about the method fillUpRequiredFieldofNewPurchaseLoadOnions()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async fillUpRequiredFieldofNewPurchaseLoadOnions () {
    await driver.wait(until.elementLocated(this.grower_LoadNumField), 100000).sendKeys('A50001');
    await driver.wait(until.elementLocated(this.field_List), 100000).click();
    await driver.wait(until.elementLocated(this.field_option2), 100000).click();
    await driver.wait(until.elementLocated(this.intended_UseEstimatedId), 50000).click();
    await driver.wait(until.elementLocated(this.onions_Organic), 50000).click();
    await driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 50000).sendKeys('0815');
    await driver.wait(until.elementLocated(this.hauler_dropdown), 50000).click();
    await driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 50000).click();
  }

  /**
         * Brief description about the method enterDataInRequiredFieldParsley()
         * @param: NA
         * @description: It will enter the value,click operation in required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async fillUpRequiredFieldofNewPurchaseLoadParsley () {
    await driver.wait(until.elementLocated(this.grower_LoadNumField), 500000).sendKeys('A60001');
    await driver.wait(until.elementLocated(this.field_List), 50000).click();
    await driver.wait(until.elementLocated(this.field_optionParsleyInbound), 500000).click();
    await driver.wait(until.elementLocated(this.intended_UseEstimatedId), 500000).click();
    await driver.wait(until.elementLocated(this.parsley_Organic), 500000).click();
    await driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 500000).sendKeys('0815');
  }

  /**
         * Brief description about the method selectOptionFromintendedUseDropDown()
         * @param: NA
         * @description: It will select the options from dropdown list and Click operation in required field, once the element loaded in the page.
         * If match not found then it returns failed
         * @return : Promise Object
         * @author: Rakesh
         */
  async selectOptionFromintendedUseDropDown () {
    await driver.wait(until.elementLocated(this.intended_UseEstimatedId), 50000).click();
    await driver.wait(until.elementLocated(this.garlic_Juice), 50000).click();
  }

  /**
         * Brief description about the method clickOnDumpButton()
         * @param: NA
         * @description: It will click on the Dump Button once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnDumpButton () {
    const dumpButton = driver.wait(until.elementLocated(this.dump_button), 500000); // Waits for 10 seconds
    await dumpButton.click();
  }

  /**
         * Brief description about the method clickOnCancelButton()
         * @param: NA
         * @description: It will click on the Cancel Button once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnCancelButton () {
    // await new Promise(resolve => setTimeout(resolve, 10000));
    const cancelButton = driver.wait(until.elementLocated(this.inbound_CancelButton), 50000); // Waits for 10 seconds
    await cancelButton.click();
  }

  /**
         * Brief description about the method clickOnNextButton()
         * @param: NA
         * @description: It will click on the Next Button once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnNextButton () {
    const nextButton = driver.wait(until.elementLocated(this.next_Button), 200000); // Waits for 10 seconds
    await nextButton.click();
  }

  /**
         * Brief description about the method clickOnGradeButton()
         * @param: NA
         * @description: It will click on the Grade Button once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnGradeButton () {
    const gradeButton = driver.wait(until.elementLocated(this.grade_Button), 50000);
    await gradeButton.click();
  }

  /**
         * Brief description about the method clickOnDumpTab()
         * @param: NA
         * @description: It will click on the Dump Tab once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnDumpTab () {
    await driver.wait(until.elementLocated(this.dump_Tab), 200000).click();
  }

  /**
         * Brief description about the method enterValueInShiftField()
         * @param: NA
         * @description: It will enter the value in Shift required field, once the element loaded in the page.
         * If match not found then it returns null
         * @return : Promise Object
         * @author: Rakesh
         */
  async enterValueInShiftField () {
    await driver.wait(until.elementLocated(this.siftNumber_TextField), 50000).sendKeys('789');
  }

  /**
         * Brief description about the method clickOnFinishButton()
         * @param: NA
         * @description: It will click on the Finish Button once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnFinishButton () {
    const finishButton = driver.wait(until.elementLocated(this.finish_button), 50000);
    await finishButton.click();
  }

  /**
         * Brief description about the method clickOnprintButton()
         * @param: NA
         * @description: It will click on the Print Button once it loaded in the page
         * @return : Promise Object
         * @author: Rakesh
         */
  async clickOnprintButton () {
    const printButton = driver.wait(until.elementLocated(this.print_button), 50000);
    await printButton.click();
  }
  //* *********************End to End Scenarios ********************* */

  async inTransitGarlic (cropPageName) {
    const fieldTag = driver.wait(until.elementLocated(this.fieldTag), 50000);
    await fieldTag.sendKeys('30005');
    const fielddrodownList = driver.wait(until.elementLocated(this.field_List), 50000);
    await fielddrodownList.click();
    const selectOption = driver.wait(until.elementLocated(this.field_option), 50000);
    await selectOption.click();
    const intendedUseEstimatedId = driver.wait(until.elementLocated(this.intended_UseEstimatedId), 50000);
    await intendedUseEstimatedId.click();
    const garlicJuice = driver.wait(until.elementLocated(this.garlic_Juice), 50000);
    await garlicJuice.click();
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 50000);
    await fieldTimeOutTextField.sendKeys('1200');
    const haulerDropdownList = driver.wait(until.elementLocated(this.hauler_dropdown), 50000);
    await haulerDropdownList.click();
    const selectOptionfromHaulerDropdown = driver.wait(until.elementLocated(this.selectOption_haulerDropdown), 50000);
    await selectOptionfromHaulerDropdown.click();
    const FinishButton = driver.wait(until.elementLocated(this.finish_button), 50000);
    await FinishButton.click();
  }

  async purchaseGarlic () {
    const growerLoadNumTextField = driver.wait(until.elementLocated(this.grower_LoadNumField), 30000);
    await growerLoadNumTextField.sendKeys('56788');
    // const fieldTimeInDate = driver.wait(until.elementLocated(this.fieldTimeIn_date), 30000);
    // await fieldTimeInDate.clear();
    // await fieldTimeInDate.sendKeys('09092023');
    const fieldTimeInTextField = driver.wait(until.elementLocated(this.fieldTimeIn_textfield), 20000);
    await fieldTimeInTextField.clear();
    await fieldTimeInTextField.sendKeys('0800');
    // const fieldTimeOutDate = driver.wait(until.elementLocated(this.fieldTimeOut_date), 20000);
    // await fieldTimeOutDate.clear();
    // await fieldTimeOutDate.sendKeys('09092023');
    const fieldTimeOutTextField = driver.wait(until.elementLocated(this.fieldTimeOut_textfield), 20000);
    await fieldTimeOutTextField.clear();
    await fieldTimeOutTextField.sendKeys('0815');
    const grossTextField = driver.wait(until.elementLocated(this.gross_field), 20000);
    await grossTextField.sendKeys('1900');
    const arriveDate = driver.wait(until.elementLocated(this.arrive_date), 20000);
    await arriveDate.sendKeys('1000');
  }

  async gradeGarlic (cropPageName) {
    await driver.wait(until.elementLocated(this.inspection_Time), 100000).sendKeys('0500');
    await driver.wait(until.elementLocated(this.inspector_Name), 100000).sendKeys('Ram');
    await driver.wait(until.elementLocated(this.dirt_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.cull_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.solids_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.master1_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.master2_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.moistureInWt_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.moistureOutWt_TextField), 100000).sendKeys('0');
    await driver.wait(until.elementLocated(this.defectSample_TextField), 100000).sendKeys('0');
  }

  async clickOnIntransitTab (tabName) {
    await driver.wait(until.elementLocated(this.inTransit_Tab), 50000).click();
  }

  async clickOnInProgressTab (tabName) {
    const inProgressTab = driver.wait(until.elementLocated(this.inProgress_Tab), 50000);
    await inProgressTab.click();
  }

  async clickOnawaitingGradesTab (tabName) {
    const inawaitingGradesTab = driver.wait(until.elementLocated(this.inawaitingGrades_Tab), 50000);
    await inawaitingGradesTab.click();
  }

  async clickOnIntransitList (tabList) {
    const intransitTabList = driver.wait(until.elementLocated(this.inTransitTab_List), 50000);
    await intransitTabList.click();
  }

  async clickOnInProgressList (tabList) {
    const intransitTabList = driver.wait(until.elementLocated(this.inProgressTab_List), 50000);
    await intransitTabList.click();
  }

  async clickOnawaitingGradeList (tabList) {
    const awaitingGradeList = driver.wait(until.elementLocated(this.awaitingGradeTab_List), 50000);
    await awaitingGradeList.click();
  }

  //* *********************End to End Scenarios ********************* */
}
module.exports = new InboundView();
