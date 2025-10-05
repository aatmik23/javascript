// console.log(add(5))

// function add(num){
//     return num +1 
// }

// console.log(addtwo(5) ) //will not work as use before d3claraiton

// const addtwo = function (num){
//     return num +2 
// }


//this and arrow function 

// const obj1 ={
//     name: "aleex",
//     price: 3445,
//     welcomeuser : function (){
//         console.log(`${this.name} welcome back`)
//         console.log(this)
//     }
// }

// obj1.welcomeuser()
// obj1.name = "olive"
// obj1.welcomeuser()
// console.log(this)  //empty but in brower it shows gobal obj window

function chai(){
   let  username = "aleex"
    console.log(this) //return so many values in fi=unction

    console.log(this.username) //not work undefined work only on object
}

chai()