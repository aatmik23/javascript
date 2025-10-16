class user{
     constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
     }

     encryptPassword(){
           return `${this.password}abc`

     }
}

const chai = new user("chai","abc@gmail.com","123jfj")
console.log(chai.encryptPassword())

//behind the scence

function newuser(username,password,email){ 
    this.username = username
    this.password = password
    this.email = email
}

newuser.prototype.encryptPassword = function(){
    return `${this.password} your password`
}

const tea = new newuser("aryan","abc253","pass1245")
console.log(tea)
console.log(tea.encryptPassword())