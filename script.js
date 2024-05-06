let icons = ['square', 'plus', 'minus', 'divide', 'slash', 'backslash'];

function render() {
  document.getElementById('icons').innerHTML = icons.filter(i=>i.includes(document.getElementById('search').value)).sort().map(i=>`<div class="icon">
  <p>${i}</p>
  <img src="/icons/${document.getElementById('type').checked ? 'outline' : 'base'}/${i}.svg">
</div>`).join('')
}

document.getElementById('type').onchange = render;
document.getElementById('search').onchange = render;
render();
