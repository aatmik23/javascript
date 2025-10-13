let myname ="hitehs      "
let mychannel = "news        "   //method function in object user.greet()

let myarr =["hulk","spiderman"]
 
let newobj =  {
    name : "aleex",
    pass : 'acdx22',
    power : function(){
        console.log("hey hero")
    }
}

Object.prototype.hitesh = function(){  //upper most harrache
    console.log("i am hitesh")
}

Array.prototype.heyhitesh = function(){
    console.log("hey hitesh how are you")
}
newobj.hitesh()
myarr.hitesh()
myarr.heyhitesh()
// newobj.heyhitesh() //show error 

const user ={
    name : "chai",
    email : "chai@google.com"
}
const techer = {
    isavailabe : true,
    // __proto__ : user //it can access property of user
}


const techassignmen = {
    newassignment : "js support",
    done : true
}


console.log(techer.email)
console.log(techer)
console.log(techer.name)
console.log(user)

// techer.__proto__ = techassignmen  //old way to inheritance

console.log(techer.done)

Object.setPrototypeOf(techer,techassignmen) //modern syntax

console.log(techer.done)


String.prototype.truelenght = function(){
    console.log(this)
    console.log(this.trim().length)
}

"hitesh   ".truelenght()

const supra = "toyota new   "
supra.truelenght()