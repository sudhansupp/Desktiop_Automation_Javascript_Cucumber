const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const inboundView = require('../../core/page-object/gradestar/inbound-view');
const MainView = require('../../core/page-object/gradestar/main-view');
const LoginView = require('./../../core/page-object/gradestar/login-view');
const GradeStarFactory = require('./../../core/page-object/gradestart-factory');
const assert = require('chai').assert;

// 60 Minute has given for execute all Scenarios at a time
setDefaultTimeout(4000 * 1000);

Given(/^I open "([^"]*)" gradestar application$/, async function (gradestarName) {
  await GradeStarFactory.openGradestar(gradestarName);
});

Given(/^I login with "([^"]*)" gradestar credentials$/, async function (gradeStarType) {
  await LoginView.loginToGradestar(gradeStarType);
});

Given(/^I validate the list in "([^"]*)" group$/, async function (tabName, expectedTable) {
  const result = (tabName === 'New Field Departure'
    ? 1
    : (tabName === 'New Purchase Load' ? 2 : (tabName === 'New Transfer Load' ? 3 : 4)));
  const expecList = expectedTable.rawTable.map(row => row[0]);
  const actualList = await MainView.getListOfCropsInTabs(result);
  const set1 = new Set(expecList);
  const set2 = new Set(actualList);
  const isEquals = set1.size === set2.size && [...set1].every(item => set2.has(item));
  assert.isTrue(isEquals);
});

When(/^I click on "([^"]*)" crop from "([^"]*)" Tab$/, async function (cropName, tabName) {
  const tabId = (tabName === 'New Field Departure'
    ? 1
    : (tabName === 'New Purchase Load'
        ? 2
        : (tabName === 'New Transfer Load'
            ? 3
            : (tabName === 'New Miscellaneous Load'
                ? 4
                : 5))));

  const cropId = (tabName === 'New Field Departure' && cropName === 'garlic'
    ? 1
    : (tabName === 'New Field Departure' && cropName === 'Onions'
        ? 2
        : (tabName === 'New Field Departure' && cropName === 'Parsley'
            ? 3
            : (tabName === 'New Purchase Load' && cropName === 'Chili Pepper'
                ? 1
                : (tabName === 'New Purchase Load' && cropName === 'garlic'
                    ? 2
                    : (tabName === 'New Purchase Load' && cropName === 'Onions'
                        ? 3
                        : (tabName === 'New Purchase Load' && cropName === 'Parsley'
                            ? 4
                            : (tabName === 'New Transfer Load' && cropName === 'garlic'
                                ? 1
                                : (tabName === 'New Transfer Load' && cropName === 'Onions'
                                    ? 2
                                    : (tabName === 'New Transfer Load' && cropName === 'Parsley'
                                        ? 3
                                        : (tabName === 'New Miscellaneous Load' && cropName === 'Ship'
                                            ? 1
                                            : (tabName === 'New Miscellaneous Load' && cropName === 'Receive'
                                                ? 2
                                                : (tabName === 'New Miscellaneous Load' && cropName === 'Certified Scale'
                                                    ? 3
                                                    : 5)))))))))))));
  await MainView.navigateToCropDetailsByTabName(tabId, cropId);
});

Then(/^I validate the Reqired Field of "([^"]*)" of Inbound Page$/, async function (cropName) {
  await inboundView.handlePopUp(cropName);
});

Then(/^I Enter data in Reqired Field of "([^"]*)" of Inbound Page$/, async function (cropPageName) {
  if (cropPageName === 'In-transit Garlic') { await inboundView.dataEnterIntoRequiredFieldofInboundGarlic(); }
  if (cropPageName === 'In-transit Onions') { await inboundView.dataEnterIntoRequiredFieldofInboundOnions(); }
  if (cropPageName === 'In-transit Parsley') { await inboundView.dataEnterIntoRequiredFieldofInboundParsley(); }
});

Then(/^I Navigate to "([^"]*)" Page of Load : INTRANSIT RECEIVE$/, async function (purchaseCrop) {
  if (purchaseCrop === 'Purchase-Garlic') { await inboundView.dataEnterIntoRequiredFieldofPurchaseGarlic(); }
  if (purchaseCrop === 'Purchase-Onions') { await inboundView.dataEnterIntoRequiredFieldofPurchaseOnions(); }
  if (purchaseCrop === 'Purchase-Parsley') { await inboundView.dataEnterIntoRequiredFieldofPurchaseParsley(); }
});

Then(/^I Navigate to Dump Page of "([^"]*)" Load : INTRANSIT RECEIVE$/, async function (dumpPageName) {
  if (dumpPageName === 'Purchase-Garlic') { await inboundView.dataEnterIntoRequiredFieldofDumpGarlic(); }
  if (dumpPageName === 'Purchase-Onions') { await inboundView.dataEnterIntoRequiredFieldofDumpOnions(); }
  if (dumpPageName === 'Purchase-Parsley') { await inboundView.dataEnterIntoRequiredFieldofDumpParsley(); }
});

Then(/^I validate the Dataflow of "([^"]*)" Page$/, async function (cropPageName) {
  if (cropPageName === 'In-transit Garlic') { await inboundView.datFlowInGarlicInboundPage(); }
  if (cropPageName === 'In-transit Onions') { await inboundView.datFlowInOnionsInboundPage(); }
  if (cropPageName === 'In-transit Parsley') { await inboundView.datFlowInParsleyInboundPage(); }
});

Then(/^I should see all the below Required Lebels$/, async (table) => {
  const fieldNames = await table.hashes();
  for (let i = 0; i < fieldNames.length; i++) {
    await inboundView.verifyPresneceOfLabelsInInboundPage(fieldNames[i].fieldName);
  }
});

Then(/^I verify the required field in dump$/, async function () {
  await inboundView.clickOnDumpButton();
  await inboundView.handlePopUp();
  await inboundView.enterValueInShiftField();
});

Then(/^I verify the mandatory fields of Inbound page in garlic crop$/, async (table) => {
  const fieldNames = await table.hashes();
  for (let i = 0; i < fieldNames.length; i++) {
    console.log('params are : ', fieldNames[i].fieldName, fieldNames[i].locatorName);
    await inboundView.verifyMandatoryFieldsInInboundPage(fieldNames[i].fieldName, fieldNames[i].locatorName);
  }
});

Then(/^I validate the Required Field$/, async function () {
  await inboundView.clickOnNextButton();
  await inboundView.handlePopUp();
});

Then(/^I enter the data in "([^"]*)" required field$/, async function (cropName) {
  if (cropName === 'Purchase-Garlic') { await inboundView.fillUpRequiredFieldofNewPurchaseLoadGarlic(); }
  if (cropName === 'Purchase-Onions') { await inboundView.fillUpRequiredFieldofNewPurchaseLoadOnions(); }
  if (cropName === 'Purchase-Parsley') { await inboundView.fillUpRequiredFieldofNewPurchaseLoadParsley(); }
});

Then(/^I click on "([^"]*)" Button$/, async function (buttonName) {
  if (buttonName === 'Receive') { await inboundView.clickOnReceiveButton(); }
  if (buttonName === 'Cancel') { await inboundView.clickOnCancelButton(); }
  if (buttonName === 'Dump') { await inboundView.clickOnDumpButton(); }
  if (buttonName === 'Next') { await inboundView.clickOnNextButton(); }
  if (buttonName === 'Finish') { await inboundView.clickOnFinishButton(); }
  if (buttonName === 'Print') { await inboundView.clickOnprintButton(); }
});

Then(/^I Click on "([^"]*)" Tab$/, async function (tabName) {
  if (tabName === 'Grade') { await inboundView.clickOnGradeButton(); }
  if (tabName === 'Dump') { await inboundView.clickOnDumpTab(); }
  if (tabName === 'IN TRANSIT') { await inboundView.clickOnIntransitTab(tabName); }
  if (tabName === 'IN PROGRESS') { await inboundView.clickOnInProgressTab(tabName); }
  if (tabName === 'AWAITING GRADES') { await inboundView.clickOnawaitingGradesTab(tabName); }
});

Then(/^I select any option from Est. Intended Use$/, async function () {
  await inboundView.selectOptionFromintendedUseDropDown();
});

Then(/^I enter value in Shift Field$/, async function () {
  await inboundView.enterValueInShiftField();
});

//* ******** End to End Scenarios step defination ******** */

// Then(/^I Click on "([^"]*)" Tab$/, async function (tabName) {
//   if (tabName === 'IN TRANSIT') { await inboundView.clickOnIntransitTab(tabName); }
//   if (tabName === 'IN PROGRESS') { await inboundView.clickOnInProgressTab(tabName); }
//   if (tabName === 'AWAITING GRADES') { await inboundView.clickOnawaitingGradesTab(tabName); }
// });

Then(/^I Fill the details in "([^"]*)" Page$/, async function (cropPageName) {
  if (cropPageName === 'In-transit Garilc') { await inboundView.inTransitGarlic(); }
  if (cropPageName === 'Purchase Garilc') { await inboundView.purchaseGarlic(); }
  if (cropPageName === 'Grade') { await inboundView.gradeGarlic(); }
});

Then(/^I click on "([^"]*)" List$/, async function (tabList) {
  if (tabList === 'IN TRANSIT') { await inboundView.clickOnIntransitList(tabList); }
  if (tabList === 'IN PROGRESS') { await inboundView.clickOnInProgressList(tabList); }
  if (tabList === 'AWAITING GRADES') { await inboundView.clickOnawaitingGradeList(tabList); }
});

Then(/^I handle Error Message$/, async function () {
  await inboundView.handlePopUp();
});
