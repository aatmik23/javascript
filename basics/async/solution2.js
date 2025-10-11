const insert = document.querySelector('#insert')

window.addEventListener('keydown',function(e){
  insert.innerHTML =  `<div class='color'><table>
  
  <thead>
    <tr>
      <th scope="col">key</th>
      <th scope="col">keycode</th>
      <th scope="col">code</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.keyCode}</td>
    </tr>
    </table>


  `
})