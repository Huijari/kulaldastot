// Copyright 2016 github.com/huijari

const render = (markdown) => {
  const content = document.getElementById('content');
  content.innerHTML = marked(markdown);
};

NodeList.prototype.forEach = Array.prototype.forEach;
const anchor = () => document.querySelectorAll('ol > li')
  .forEach((li, id) => li.id = id + 1);

const wiki = (address) => {
  var base = 'http://dwarffortresswiki.org/index.php/';
  var pattern = /#wiki-(.*)/;
  var result = pattern.exec(address);
  return result ? open(base + result[1]) : false;
};

(() => {
  const players = [
    'S', // Simas
    'R', // Rabelo
    'I', // Ice
  ];
  const today = Math.floor(new Date().getTime() / 0x5265C00) % players.length;
  document.getElementById('player').innerText = players[today];
})();

reqwest('log.md')
  .then(response => render(response))
  .then(anchor);

addEventListener('hashchange',
  () => wiki(location.hash) ? location.hash = "" : 0);
