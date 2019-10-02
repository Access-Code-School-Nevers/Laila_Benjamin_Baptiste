function random_position() {
  var x = Math.floor(Math.random()*64);
  var y = Math.floor(Math.random()*64);
  console.log(x,y);
}

function setElemPos(elem, pos) {
  elem.style.position = pos;
}
