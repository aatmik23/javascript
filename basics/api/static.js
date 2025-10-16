class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log('you are logged')
    }
    static createdid(){  //this function is availabe fornver user to stop this use static
        console.log('your id is here')
    }
}

const chai = new user("abhinav")
chai.logme()
chai.createdid()