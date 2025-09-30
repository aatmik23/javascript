// let myarr =  [1,3,4,5,6,8]
// // let myarr2 = new Array(2,6,7,8)
// // console.log(myarr[5])
// // console.log(myarr2[2])
// // myarr.push(6)
// // console.log(myarr)
// // myarr.pop()
// // console.log(myarr)
// // // myarr.unshift(9)
// // // console.log(myarr) //and in first
// // myarr.shift()
// // console.log(myarr) // remove first elemnt
// // console.log(myarr.includes(5))
// // console.log((myarr.indexOf(0)))

// // let newarr = myarr.join()  //CHANGE ARRAY INTO STRING 
// // console.log(newarr)

// console.log("a",myarr)
// let new1 = myarr.slice(1,3)  //slice the array
// console.log(new1)
// console.log("b",myarr)

// let new2 = myarr.splice(1,3)  //manulate the orginal array remove the slice part
// console.log(new2)
// console.log('c',myarr)


// let new_hero = [1,7,54,32]
// let new2 = [56,44,56,67]
// // new_hero.push(new2)  //array in array 
// // console.log(new_hero)

// let new3 = new_hero.concat(new2)   
// let new4 = [...new_hero,...new2]  //spread merege two array
// console.log(new4) 

// //return new array
// console.log(new3)
let arr = [1,43,45,[234,44],56,[345,554,[45,[43,43,43],67]]]

let anoarr=arr.flat(2) //depth 
console.log(anoarr)

console.log(Array.isArray("htiesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({"marks":200})) //retuen empty array if no key or value given

score1 = 100
score2 = 200
score3 = 400
console.log(Array.of(score1,score2,score3))