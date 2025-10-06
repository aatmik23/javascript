// // // // Array of book objects with properties: bookname, category, publish
// // // const books = [
// // //     { bookname: "Harry Potter", category: "fiction", publish: "2001" },
// // //     { bookname: "Sapiens", category: "non-fiction", publish: "2011" },
// // //     { bookname: "The Hobbit", category: "fiction", publish: "1937" },
// // //     { bookname: "Educated", category: "non-fiction", publish: "2018" },
// // //     { bookname: "1984", category: "fiction", publish: "1949" }
// // // ];
// // // const arr =[1,3,4,5,6,8,6,5]  //for each does not return any values thats why we use filter
// // // const numm = arr.filter((num)=>{
// // //     return num>4
// // // })
// // // console.log(numm)

// // // //by usinng for each

// // // const mynum =[]
// // // arr.forEach((num)=>{
// // //     if (num> 4){
// // //         mynum.push(num)
// // //     }
// // // })

// // // let nw = books.filter((book)=>{
// // //     if (book.category=="fiction"){
// // //         return book
// // //     }
// // // })f

// // // console.log(nw)

// // //maps

// // let arr = [1,2,3,4,5,3,7,60]
// // const newnum = arr.filter((num)=>{
// //     return num+10
// // })
// // console.log(newnum)

// // const mynum = arr.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>20)
// // console.log(mynum)


// //reduce - add an array

// let arr = [1,2,3]
// let total = arr.reduce((acc,comp)=>{
//     console.log(`${acc} and ${comp}`)
//     return acc+comp
// },0)  //give 0 for inital valu acc

// console.log(total)

const course = [
    {
        course :'mobile deev',
        price : 2334
    },
    {
        course :'js deev',
        price : 6342
    },
    {
        course :'pythin deev',
        price : 2221
    },
    {
        course :'java deev',
        price : 4534
    }
]

const total = course.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(total)