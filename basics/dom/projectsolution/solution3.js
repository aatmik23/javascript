let clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()     //setInterval repeat again at set time
  clock.innerHTML=date.toLocaleTimeString()
},1000)