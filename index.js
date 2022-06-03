// Import stylesheets
import './style.css';

// Write Javascript code!

const numberList = document.getElementById('shuffleAndSort');

function shuffle(items) {
  let cloned = items.slice(0),
    temp,
    i = cloned.length,
    random;
  while (--i) {
    random = Math.floor(i * Math.random());
    temp = cloned[random];
    cloned[random] = cloned[i];
    cloned[i] = temp;
  }
  return cloned;
}

function shuffleNodes() {
  var nodes = numberList.children,
    i = 0;
  nodes = Array.prototype.slice.call(nodes);
  nodes = shuffle(nodes);
  while (i < nodes.length) {
    numberList.appendChild(nodes[i]);
    ++i;
  }
}

document.getElementById('shuffle').onclick = shuffleNodes;

function sortNodes(items) {
  let cloned = items.slice(0);

  for (var i = 0; i < cloned.length; i++) {
    for (var j = 0; j < cloned.length - i - 1; j++) {
      if (Number(cloned[j].innerHTML) > Number(cloned[j + 1].innerHTML)) {
        var temp = cloned[j];
        cloned[j] = cloned[j + 1];
        cloned[j + 1] = temp;
      }
    }
  }
  return cloned;
}

function sortList() {
  let nodes = numberList.children,
    i = 0;
  nodes = Array.prototype.slice.call(nodes);
  nodes = sortNodes(nodes);

  while (i < nodes.length) {
    numberList.appendChild(nodes[i]);
    ++i;
  }
}

document.getElementById('sort').onclick = sortList;
