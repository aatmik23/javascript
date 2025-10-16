// console.log(Math.PI)
// const descp = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descp)

const obj2 = {
    name : "aleex",
    password : "abc123"
}

console.log(Object.getOwnPropertyDescriptor(obj2,"name"))

Object.defineProperty(obj2,'name',{
    writable : false
})
console.log(Object.getOwnPropertyDescriptor(obj2,"name"))
 