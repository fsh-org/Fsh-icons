let icons = ['square'];

document.getElementById('icons').innerHTML = icons.map(i=>`<img src="/icons/${i}.svg">`).join('')
