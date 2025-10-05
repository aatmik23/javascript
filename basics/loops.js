// // // for of  // key == value
// // const arr =["flash","spideman","dupperman"]
// // for (const element of arr) {
// //     console.log(element)
// // }

// // const str = "hello world"
// // for (const element of str) {
// //     console.log(element )
// // }

// //maps

// const map = new Map()
// map.set("in","india")
// map.set("us","usa")
// map.set("jap","japan")
// console.log(map)
// for (const [key,value] of map) {  //dont work with object
//     console.log(`${key} ===> ${value}`) 
    
// }

//forin   //key == 0,1,2,3

const myobj={                //have its own key
    js : "javascript",
    c : 'coutrt',
    p:"oyton"               //map is not itretable
}

for (const key in myobj) {
    console.log(key)
    console.log(myobj[key])
}

const arr = [1,4,6,57,56,89]
// for (const key in arr) {
//    console.log(arr[key])
    
    
// }

arr.forEach((index,item,arsr)=>{
    console.log(index,item,arsr)
})
