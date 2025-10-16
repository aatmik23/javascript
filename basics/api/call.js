function setusername(username){ 
    this.username = username
}

function createuser(username,email,password){
 setusername.call(this,username) //so when you call this it erase after excutioon and not hold the value so we use call to hold the value
 // but the this in setusername is differnt from this in create user so we pass this with call to tell the this --> is obj create user
    this.email = email
     this.password = password
       return this //if i use return without new it return global object 
       // and you have to not use this when you use new as it automaticaly return
}

console.log(new createuser("rohan","new@fb.com","abc@1234"))