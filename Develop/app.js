const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");//creating a directory called output ie a folder 
const outputPath = path.join(OUTPUT_DIR, "team.html");//creating a team.html file in the output folder

const render = require("./lib/htmlRenderer"); //calling the render html page and pass through the const of teamMembers
const Choices = require("inquirer/lib/objects/choices");
const { listenerCount } = require("process");
const Choice = require("inquirer/lib/objects/choice");

const teamMembers = [];

function createManager(){
    inquirer
        .prompt([
    {
        type:"input",
        name: "name",
        message: "Please type in the name of the employee:",
    },
    {
        type:"input",
        name: "id",
        message: "Please type in the ID number of the employee:",
    },
    {
        type:"input",
        name: "email",
        message: "Please type in the email of the employee:",
    },
    {
        type:"input",
        name: "officeNumber",
        message: "Please type the office number of the employee:",
    }
    //arrow function taking in response
    ]).then(response => {
        const manager = new Manager (response.name, response.id, response.email, response.officeNumber);
        //take the new manager and push that to teamMembers array
            teamMembers.push(manager);
            //calling the create team function 
            createTeam();
    })
};

   function createTeam (){
       inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Please select the role of the employee:",
                choices:["Engineer", "Intern", "I don't want to add anymore"],
            },
        ]).then(response => {
            switch(response.role){
                case "Engineer":
                    createEngineer ();
                    break;
                case "Intern":
                    createIntern ();
                    break;
                default: 
                    buildTeam();
            }
        })
    };

function buildTeam(){
        if(!fs.existsSync(OUTPUT_DIR)){//if the folder is not there, then we are going to create one
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
};
    createManager();
    //*Do not mess with any code above this line!!
    
    function createEngineer(){
        inquirer
            .prompt([
        {
            type:"input",
            name: "name",
            message: "Please type in the name of the employee:",
        },
        {
            type:"input",
            name: "id",
            message: "Please type in the ID number of the employee:",
        },
        {
            type:"input",
            name: "email",
            message: "Please type in the email of the employee:",
        },
        {
            type:"input",
            name: "github",
            message: "Please enter in the Github associated with this employee:",
        }
        //arrow function taking in response
        ]).then(response => {
            const engineer = new Engineer (response.name, response.id, response.email, response.github);
            //take the new manager and push that to teamMembers array
                teamMembers.push(engineer);
                //calling the create team function 
                createTeam();
        });
    };
    
    function createIntern(){
                    inquirer
                        .prompt([
                    {
                        type:"input",
                        name: "name",
                        message: "Please type in the name of the employee:",
                    },
                    {
                        type:"input",
                        name: "id",
                        message: "Please type in the ID number of the employee:",
                    },
                    {
                        type:"input",
                        name: "email",
                        message: "Please type in the email of the employee:",
                    },
                    {
                        type:"input",
                        name: "school",
                        message: "Please enter in the name of the school of this intern:",
                    }
                    //arrow function taking in response
                    ]).then(response => {
                        const intern = new Intern (response.name, response.id, response.email, response.school);
                        //take the new manager and push that to teamMembers array
                            teamMembers.push(intern);
                            //calling the create team function 
                            createTeam();
                    });
                };