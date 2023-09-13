const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  // screenshotsDirectory: 'screenshots/',
  // storeScreenshots: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'QA',
    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'local'
  },
  failedSummaryReport: true
};

try {
  // Generate the HTML report
  reporter.generate(options, (err) => {
    if (err) {
      console.error('Error generating HTML report:', err);
      // Handle the error here, e.g., log it or take appropriate action.
      // You can also choose to exit the process if the error is critical.
    } else {
      console.log('HTML report generated successfully');
    }
  });
} catch (error) {
  console.error('Error occurred:', error);
}
process.on('uncaughtException', (error) => {
  console.error('Unhandled exception:', error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled promise rejection:', reason);
});
// ********End to end sceanrios***********/
