let icons = ['square', 'plus'];

document.getElementById('icons').innerHTML = icons.map(i=>`<img class="icon" src="/icons/base/${i}.svg">`).join('')

document.getElementById('type').onchange = function(event){
  document.querySelectorAll('.icon').forEach(e=>{
    if (event.target.checked) {
      e.src = e.src.replace('base/', 'outline/')
    } else {
      e.src = e.src.replace('outline/', 'base/')
    }
  })
}
