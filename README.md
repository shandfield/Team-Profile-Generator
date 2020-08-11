# Team-Profile-Generator
![inquirer](https://img.shields.io/npm/v/inquirer)


Description: 
This project was built via utilizing node.js. It creates a employee rooster starting with a manager, then allowing the user to add additional employees in the engineer and intern roles. The manger role prompts the user utilizing inquirer to gather information regarding the employee's name, ID numbers, emails, office numbers. It also gathers which role of the employee would like to be added to the team, at this time the choices are engineer and intern, as the application prompts at the manager level right away.  

Installation: 
Ensure to run a npm i in your terminal prior to using this application. As there are a few packages that need to be installed. There packages include inquirer, fs, path, and if you would like to run the npm run test, then jest will need to be installed as well. 

Usage: 
In order to utilize this application the user will first need to open their terminal, and ensure that the terminal is linked to this application. Once the user has ensured that it is connected, the user will need to then type into your terminal npm i. This will install the necessary packages to complete this application. Once the packages are installed, type into the terminal node apps.js this command prompts the questions regarding the staff members that the user wants to add. The questions will start with the manager first, and gather the information necessary. It will then prompt a choices selection of adding an engineer, intern or "I do not want to add anyone else". When engineer or intern are selected it will prompt questions directed toward that employee group. At the end of the questions, it will once again ask if the user would like to add to the current list. If the last choice is selected, then it will console log that it has "Successfully created your team!". At this point, the application will save the created team in a newly created output folder, and inside will have the file called team.html. The user can open this document into the browser to view.
Video Link: https://drive.google.com/file/d/1vVHGysR2Q78DLTxZKJHF1WGmFW55If5j/view
![2020-07-23 (1)](https://user-images.githubusercontent.com/63683598/88351437-8d7be080-cd13-11ea-9b25-9a35ee37f69c.png)
![2020-07-23 (2)](https://user-images.githubusercontent.com/63683598/88351439-92409480-cd13-11ea-915d-fcc72dafe00c.png)
![2020-07-23 (3)](https://user-images.githubusercontent.com/63683598/88351441-940a5800-cd13-11ea-8fdb-aab50e5e47da.png)

Credits:
Copyright (c) 2016 Simon Boudrias (twitter: @vaxilart) Licensed under the MIT license.

Contributing: 
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Tests:
To run the tests in this application, ensure to run npm i jest in your terminal. Once that is installed, please type into the terminal npm run test. 
![2020-07-23](https://user-images.githubusercontent.com/63683598/88351443-953b8500-cd13-11ea-88bd-80e0d81b3cbc.png)

Questions:
If there are any questions, you can ask me via my Github:https://github.com/shandfield
