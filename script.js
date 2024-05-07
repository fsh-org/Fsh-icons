let icons = ['backslash', 'bars', 'book', 'check', 'circle', 'divide', 'hashtag', 'home', 'house', 'magnifying-glass', 'magnifying-glass-right', 'minus', 'plus', 'slash', 'square', 'star', 'user', 'x','bold','book','carret-down','carret-left','carrent-right','carret-up','clear-format','clock','ellipsis-vertical','ellipsis','fullscreen-exit','fullscreen','grid-connected','grid','history','indentation-decrease','indentation-increase','italic','layers','list-checkboxes','list','maximize','minimize','order-letters','redo','reload','spellcheck','strikethrough','text-align-center','text-align-justified','text-align-left','text-align-right','text-interline','text','underline','undo','waffle-menu','zoom-in','zoon-out'];

function render() {
  document.getElementById('icons').innerHTML = icons.filter(i=>i.includes(document.getElementById('search').value)).sort().map(i=>`<div class="icon">
  <img src="/icons/${document.getElementById('type').checked ? 'outline' : 'base'}/${i}.svg">
  <p>${i}</p>
</div>`).join('')
}
render();
