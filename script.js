let icons = ['backslash', 'bars', 'check', 'circle', 'divide', 'hashtag', 'magnifying-glass', 'minus', 'plus', 'slash', 'square', 'star', 'user', 'x'];

function render() {
  document.getElementById('icons').innerHTML = icons.filter(i=>i.includes(document.getElementById('search').value)).sort().map(i=>`<div class="icon">
  <p>${i}</p>
  <img src="/icons/${document.getElementById('type').checked ? 'outline' : 'base'}/${i}.svg">
</div>`).join('')
}
render();