function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector(`#nested .target`);
}

function deepestChild(){
  var section = document.querySelector('#grand-node')
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  var stuff = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = stuff.length; i < l; i++) {
  stuff[i].innerHTML = parseInt(stuff[i].innerHTML, 10) + n
}
  return
}
