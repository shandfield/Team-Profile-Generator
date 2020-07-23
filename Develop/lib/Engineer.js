// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
//this extends the class of Employee to Engineer 
    class Engineer extends Employee{
        constructor (name,id,email, github){
            super (name,id,email) //super is taking the name,id and email from the employee and putting it in engineer class
            this.github= github;
        }
        getGithub(){
            return this.github;
        }
        getRole(){
            return "Engineer";
        }
    }
module.exports= Engineer;

    