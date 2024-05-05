let icons = ['square'];

document.getElementById('icons').innerHTML = icons.map(i=>`<img class="icon" src="/icons/base/${i}.svg">`).join('')

document.getElementById('type').onchange = function(event){
  document.querySelectorAll('.icon').forEach(e=>{
    if (event.target.checked) {
      e.href = e.href.replace('base/', 'outline/')
    } else {
      e.href = e.href.replace('outline/', 'base/')
    }
  })
}
