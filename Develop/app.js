const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");
const { listenerCount } = require("process");
const Choice = require("inquirer/lib/objects/choice");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//* my note: need a class to create a constructor that should actually be wrapped around these questions... 
class Employee{
    constructor (name,role,ID,email){
        this.name=name;
        this.role=role;
        this.ID= ID;
        this.email= email;
        }
    printInfo(){
        console.log(`${this.name} is the ${this.role}.The ID number is ${ID} and the email is ${email}.`)
    }
askQuestions (){
    inquirer
        .prompt([
    {
        type:"input",
        name: "name",
        message: "Please type in the name of the employee:",
    },
    {
        type:"input",
        name: "ID",
        message: "Please type in the ID number of the employee:",
    },
    {
        type:"input",
        name: "email",
        message: "Please type in the email of the employee:",
    },
    {
        type: "list",
        name: "role",
        message: "Please select the role of the employee:",
        choices:["Manager", "Engineer", "Intern"],
    },
 ]) //for the choice question, plan is to have follow up input questions pending the selection: if manager is selected, then it will prompt "Please enter the office number for this manager:"; if engineer is selected it will prompt "Please enter the github account associated with this engineer:"; if intern is selected it will prompt "what school is this intern attending?"

    .then(val => {
        if(val.role === Manager){
           this.askQuestions.prompt(`What is your office number?`)

        } else if (val.role=== Engineer){
            this.askQuestions.prompt(`What is this employees github?`)
        } else {
            this.askQuestions.prompt(`Which school is this employee attending?`)
        }
    });
};
    


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
};