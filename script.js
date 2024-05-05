let icons = ['square'];

document.getElementById('icons').innerHTML = icons.map(i=>`<img src="/icons/base/${i}.svg">`).join('')

document.getElementById('type').onchange = function(event){
  event.target.toggled
}
