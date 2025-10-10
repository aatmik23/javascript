let form = document.querySelector("form")

form.addEventListener('submit',(e)=>{
  e.preventDefault()  //to stop the default work
  let height = parseInt(document.querySelector('#height').value) //give height value and convert it into integer

  let weight = parseInt(document.querySelector('#weight').value)
  let result = document.querySelector('#results')
  if (height == "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "please eneter valid height"

  }
  else if (weight == "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "please eneter valid weight"

  }
  else{
    const bmi = (weight/((height*height)/10000).toFixed(2))
    result.innerHTML = bmi
     if (bmi < 18.6){
       let newew = document.createElement('div')
       newew.innerHTML='underweight '

       result.appendChild(newew)
     }
  }

  
 

})