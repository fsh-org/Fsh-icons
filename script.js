let icons = ['square', 'plus'];

function render() {
  document.getElementById('icons').innerHTML = icons.filter(i=>i.includes(document.getElementById('search').value)).sort().map(i=>`<img class="icon" src="/icons/${document.getElementById('type').checked}/${i}.svg">`).join('')
}

document.getElementById('type').onchange = render;
document.getElementById('search').onchange = render;
render();
