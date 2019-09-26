var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://fantasy.nfl.com/research/scoringleaders')
  .wait('.playerNameAndInfo')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('.playerNameAndInfo');
    var list = [].slice.call(nameNodes);
    return list.map(function (node) {
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });