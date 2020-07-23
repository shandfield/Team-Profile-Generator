// TODO: Write code to define and export the Employee class
//this is where constructors go
    class Employee {
        constructor (name,id,email){
            this.name=name;
            this.id= id;
            this.email= email;
            }
//creating methods to get these things
        getName(){
            return this.name
        }
        getId(){
            return this.id
        }
        getEmail(){
            return this.email
        }
        getRole(){
            return "Employee"
        }
    }
        module.exports= Employee