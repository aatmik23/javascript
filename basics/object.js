// singleton object.create

// object litreals 

const mysym = Symbol("key11")

let newuser = {
    name:"aleex",
    [mysym]:"key236",  //use symbol in objet access by[]
    isloggin:true,
    "sirname": "ver", //cannot access by newuser.sirname use []
}

// console.log(newuser.name)
// console.log(newuser['sirname'])
// console.log(newuser[mysym])

newuser.getuser = function(){
    console.log("hello user")
    console.log(`hello world ${this.name}`) //use this. to use object content
}

newuser.name = "olive"
// Object.freeze(newuser)  // freeze obj change cannot make
console.log(newuser)
newuser.name = "maddy"
console.log(newuser)
console.log(newuser.getuser)
console.log(newuser.getuser())
