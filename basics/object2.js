// const tinderuser =new Object()
// const tinderuser = {
//     name : "aleex",rollno : 12,password : "12aman"
// }
// const regularuser = {
//     fullname  : {
//         username :{
//             firstname : "jelex",
//             lastname : "rosa"
//         }

//     }
// }

// let obj1 ={1:"a",2:"b"}
// let obj2 ={3:"c",4:"d"}
// let obj3 = {obj1,obj2}  //nested obj 
// let obj4 = Object.assign({},obj1,obj2) //merge object 
// let obj5 = {...obj1,...obj2}  //most used 

// // console.log(regularuser.fullname.username.firstname)
// // console.log(obj3)
// // console.log(obj4)
// // console.log(obj5)

// const user = [
//     {
//         id : "1",email : "ama@gmail.com"
//     }, {
//         id : "1",email : "ama@gmail.com"
//     }
// , {
//         id : "1",email : "ama@gmail.com"
//     }
// ,  {
//         id : "1",email : "ama@gmail.com"
//     }
// , {
//         id : "1",email : "ama@gmail.com"
//     }


// ]

// console.log(user[0].email)
// console.log(Object.keys(tinderuser)) //array
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))  // turn every value in array
// console.log(tinderuser.hasOwnProperty("name"))

//de-structure obj

const obj = {
    name : "aleex",
    class : 12,
    passwprd : "abc123"
}

const {name:nape} = obj
console.log(nape)