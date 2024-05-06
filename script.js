let icons = ['backslash', 'bars', 'check', 'circle', 'divide', 'hashtag', 'home', 'house', 'magnifying-glass', 'magnifying-glass-right', 'minus', 'plus', 'slash', 'square', 'star', 'user', 'x'];

function render() {
  document.getElementById('icons').innerHTML = icons.filter(i=>i.includes(document.getElementById('search').value)).sort().map(i=>`<div class="icon">
  <img src="/icons/${document.getElementById('type').checked ? 'outline' : 'base'}/${i}.svg">
  <p>${i}</p>
</div>`).join('')
}
render();
