class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        //   return this.password.toUpperCase() //when you use password the race starts so both of them set value use annother variable
        return this._password.toUpperCase()
    }
    set password(value){
        // this.password = value
        this._password =value
    }
}

const chai = new user("alee@ahaha","123bshd")
console.log(chai.password)