const { Before, After } = require('@cucumber/cucumber');
const { exec } = require('child_process');
const { driver } = require('selenium-appium');
const appName = 'GradeStar.exe';

Before(async function (scenario) {
  exec(`pgrep ${appName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error checking for process: ${error}`);
      return;
    }

    const pid = parseInt(stdout);

    if (!isNaN(pid)) {
      exec(`taskkill -f /im ${appName} /t`, (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log('stdout', stdout);
        console.log('stderr', err);
      });
    } else {
      console.log(`Process ${appName} not found`);
    }
  });
});

After(async function (scenario) {
  exec(`pgrep ${appName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error checking for process: ${error}`);
      return;
    }

    const pid = parseInt(stdout);

    if (!isNaN(pid)) {
      driver.quit();
      exec(`taskkill -f /im ${appName} /t`, (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log('stdout', stdout);
        console.log('stderr', err);
      });
    } else {
      console.log(`Process ${appName} not found`);
    }
  });
});

// // *************** */
// Before(async function (scenario) {
//   exec(`taskkill -f /im ${appName} /t`, (err, stdout, stderr) => {
//     if (err) {
//       throw err;
//     }
//     console.log('stdout', stdout);
//     console.log('stderr', err);
//   });
// });

// After(async function (scenario) {
//   driver.quit();
//   exec(`taskkill -f /im ${appName} /t`, (err, stdout, stderr) => {
//     if (err) {
//       throw err;
//     }
//     console.log('stdout', stdout);
//     console.log('stderr', err);
//   });
// });
