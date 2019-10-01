// var token = document.getElementById('token');
// var moveSize = 50;
// var parentRect = document.getElementById('board').getBoundingClientRect();
// var childRect;
//
// // Handle arrows to move the token
// document.addEventListener('keydown', function(event) {
//   childRect = document.getElementById('token').getBoundingClientRect();
//
//   if (event.code == 'ArrowUp') {
//     if(childRect.top > parentRect.top)
//       token.style.top = (token.offsetTop - moveSize)+"px";
//   }
//   else if (event.code == 'ArrowRight') {
//     if(childRect.right < parentRect.right)
//       token.style.left = (token.offsetLeft + moveSize)+"px";
//   }
//   else if (event.code == 'ArrowDown') {
//     if(childRect.bottom < parentRect.bottom)
//       token.style.top = (token.offsetTop + moveSize)+"px";
//   }
//   else if (event.code == 'ArrowLeft') {
//     if(childRect.left > parentRect.left)
//       token.style.left = (token.offsetLeft - moveSize)+"px";
//   }
// });
var columns = 17;
var rows = 11;
var tile_size = 64;

var terrain = new Terrain(columns,rows,tile_size);
terrain.build();

// var player = new Personnage();
generate_character();

document.addEventListener('keydown', function(event) {
  switch (event.code) {
    case 'ArrowUp':
      player.moveUp();
      break;
    case 'ArrowLeft':
      player.moveLeft();
      break;
    case 'ArrowRight':
      player.moveRight();
      break;
    case 'ArrowDown':
      player.moveDown();
      break;
    case 'space':
      player.dropBomb();
      break;


    default:
      break;
  }
}
