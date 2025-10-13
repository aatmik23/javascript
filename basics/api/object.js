function multipleof5(num){
    return num*5               //function behave like object and function both
}
multipleof5.power =2
console.log(multipleof5(5))
console.log(multipleof5.power)
console.log(multipleof5.prototype)


function createuser(username,score){
    this.username = username
    this.score = score
       console.log(score)
    
}
let score = 99
createuser.prototype.increment = function(){   
    this.score++                //use this so it know you are taking about function score
    console.log(this.score)
}

console.log(createuser.prototype.increment)

  createuser(23,34).increment() //use new so four function can be read