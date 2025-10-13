// const user ={
//     username : 'hitesh',
//     logincount : 8,
//     signedin : true,
//     getuserdetails : function(){
//         // console.log('user details ')
//         console.log(`username ${this.username}`)
//         console.log(this)  //current context
//     }
// }
this.userno = "hitesh"
// console.log(user.username)
// console.log(user.getuserdetails())
console.log(this)  //empty parentises as their is nothing in global context 
                   //in browser it give lot of things windows    
function userone(username,login,isloggedin){
    this.username = username
    this.logincount = login
    this.isloggedin = isloggedin
    return this
     
}                
const newusers = userone('hitesh',5,true)
const newusertwo = new userone('aryan',6,true) //this will overwrite the userone value thats why we use new keyword
console.log(newusers.constructor)
console.log(newusertwo.constructor)