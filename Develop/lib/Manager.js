// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
//this extends the class of Employee to Engineer 
    class Manager extends Employee{
        constructor (name,id,email, officeNumber){
            super (name,id,email) //super is taking the name,id and email from the employee and putting it in engineer class
            this.officeNumber= officeNumber;
        }
        getofficeNumber(){
            return this.officeNumber;
        }
        getofficeNumber(){
            return "Manager";
        }
    }
module.exports= Manager;