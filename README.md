#### For desktop test cases install Appium
``````
 npm i --location=global appium
``````

 install Windows driver, Some versions is able to install without specify the source
 ``````
 appium driver install --source=npm appium-windows-driver
``````
To see witch driver is installed execute

``````
appium driver list 
``````

Run Appium to execute UI test cases
``````
appium server
``````