let columns = 17;
let rows = 11;
let tile_size = 64;

let commands = new Array();
commands.push(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space']);
commands.push(['Numpad8', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad0']);

let game = new Game(columns, rows, tile_size);


document.addEventListener('keydown', function(event) {
  for (let i = 0; i < game.gamePlayers.length; i++) {
    switch (event.code) {
      case commands[i][0]:
        game.gamePlayers[i].moveUp();
        break;

      case commands[i][1]:
        game.gamePlayers[i].moveLeft();
        break;

      case commands[i][2]:
        game.gamePlayers[i].moveDown();
        break;

      case commands[i][3]:
        game.gamePlayers[i].moveRight();
        break;

      case commands[i][4]:
        game.gamePlayers[i].dropBomb();
        break;

      default:
        break;
    }
  }
  game.update();
});


// var terrain = new Terrain(columns,rows,tile_size);
// terrain.build();
//
// var player = new Personnage();
// player.setPosition([Math.floor(Math.random()*columns),Math.floor(Math.random()*rows)]);
// console.log(player.getPosition());
//
// terrain.placePlayer(player);
//
