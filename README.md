# Team-Profile-Generator
![inquirer](https://img.shields.io/npm/v/inquirer)

## Description:
A project that utilized OOS and testing via Jest to create a terminal only program to add a manager, and then either a engineer or intern. 

### Github link:
https://github.com/shandfield/Team-Profile-Generator

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [License](#license)
* [Contribution](#contribution)
* [Inspiration](#inspiration)
* [Status](#status)
* [Demo and Pictures](#demo-and-pictures)

## General info
This project was built via utilizing node.js. It creates a employee rooster starting with a manager, then allowing the user to add additional employees in the engineer and intern roles. The manger role prompts the user utilizing inquirer to gather information regarding the employee's name, ID numbers, emails, office numbers. It also gathers which role of the employee would like to be added to the team, at this time the choices are engineer and intern, as the application prompts at the manager level right away.  
	
## Technologies
Project is created with:
*OOS
*Jest

## Setup: 
To run this program locally, fork/clone the repository, and in the terminal:
```
$ cd ../<nameoffile>
$ npm install
$ node app.js
```


## Instructions
In order to utilize this application the user will first need fork/clone this repository into their terminal. Once the user has ensured that it is connected/cloned, the user will need to then type into the terminal "npm i". This will install the necessary packages to be able to run this application. Once the packages are installed, type into the terminal "node app.js" this command prompts the questions regarding the staff members that the user wants to add. The questions will start with the manager first, and gather the information necessary. It will then prompt a choices selection of adding an engineer, intern or "I do not want to add anyone else". When engineer or intern are selected it will prompt questions directed toward that employee group. At the end of the questions, it will once again ask if the user would like to add to the current list. If the last choice is selected, then it will console log that it has "Successfully created your team!". At this point, the application will save the created team in a newly created output folder, and inside will have the file called team.html. The user can open this document into the browser to view. To run the tests in this application, ensure to run npm i jest in your terminal. Once that is installed, please type into the terminal npm run test. 

## License: Copyright (c) 2020 Shelby 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contribution:
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Status: 
This project is complete and no further work will be completed. It has passed all tests and functions the way it was coded to do. 
![2020-07-23](https://user-images.githubusercontent.com/63683598/88351443-953b8500-cd13-11ea-88bd-80e0d81b3cbc.png)

## Questions: 
If you have any questions please reach out to me via my GitHub, https://github.com/shandfield.


# Demo and Pictures: 
![2020-07-23 (1)](https://user-images.githubusercontent.com/63683598/88351437-8d7be080-cd13-11ea-9b25-9a35ee37f69c.png)
![2020-07-23 (2)](https://user-images.githubusercontent.com/63683598/88351439-92409480-cd13-11ea-915d-fcc72dafe00c.png)
![2020-07-23 (3)](https://user-images.githubusercontent.com/63683598/88351441-940a5800-cd13-11ea-8fdb-aab50e5e47da.png)

