const promiseup = new Promise(function(resolve,reject){
    //do an asynx task 
    // db call 
    setTimeout(function(){
        console.log('promise creted')
        resolve() //we have to call resolve to connect it with then

    },1000)
})

promiseup.then(function(){          // .then is  linked with resolve
    console.log("promise consumed")
})

const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'harry',password: '1232@jdjj'})
    },1000)
}).then(function(user){
    console.log(user)
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (error){
            resolve({username: 'alee',password:'abcd@1234'})
        }
        else{
            reject('error occured')
        }
    }, 1000);
})

promisethree.then(function(user){  //we cannot access return value by using console.log use .then again
  console.log(user)
  return user.username
}).then(function(err){
    console.log(err)
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('the promise is resolved or rejected')
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false

        if (error){
            resolve({username: 'javascript',password:'abcd@1234'})
        }
        else{
            reject('error occured')
        }
    }, 1000);
})

async function conste() {
 
    try {
           const response =  await promisefour
    console.log(response)
        
    } catch (error) {
        console.log(error)
        
    }
}

conste()

async function getalluser() {
   
    try {
         const response = await fetch("https://api.github.com/users/aatmik23")
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log('error',error)
    }
    
}
getalluser()