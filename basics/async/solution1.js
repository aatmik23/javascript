   function randomcolor(){
  let hex = '10123456789ABCDEF'
   let color = '#'

   for (i=0;i<6;i++){
     color += hex[Math.floor(Math.random()*16)]
     
     
   }
   return color
}
let changes

let changecolor = function(){
  document.body.style.backgroundColor=randomcolor()
}

let start = function(){

  changes = setInterval(changecolor,1000)
 
 
}
document.querySelector('#start').addEventListener('click',start)
document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(changes)
})
