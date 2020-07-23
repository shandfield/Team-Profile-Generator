// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
//this extends the class of Employee to Engineer 
    class Intern extends Employee{
        constructor (name,id,email, school){
            super (name,id,email) //super is taking the name,id and email from the employee and putting it in engineer class
            this.school= school;
        }
        getSchool(){
            return this.school;
        }
        getRole(){
            return "Intern";
        }
    }
module.exports= Intern;
