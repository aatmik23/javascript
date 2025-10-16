
class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`${this.username} welcome`)
    }

}

class teacher extends user {
    constructor(username,email,password){
        super(username) // call user and dont have to provide this 
        this.email = email
        this.password =  password
    }
    about(){
        console.log(`${this.username} is your course `)
    }
}

const chai = new teacher("aleex",'xya@dada.com',"abc552")
console.log(chai)
chai.about()
chai.logme()
console.log(chai instanceof teacher)
