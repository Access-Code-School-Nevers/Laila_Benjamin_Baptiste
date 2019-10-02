class Game {
  constructor(terrain_width, terrain_height, tile_size) {
    this.gamePlayers = new Array();
    let body = document.getElementsByTagName('body')[0];
    this.terrain = new Terrain(terrain_width,terrain_height,tile_size);

    let player1 = new Personnage(this.terrain);
    player1.set_id('player_1');
    let player2 = new Personnage(this.terrain);
    player2.set_id('player_2');

    this.terrain.build();

    this.gamePlayers.push(player1);
    this.gamePlayers[0].spawn([0,0]);
    this.gamePlayers.push(player2);
    this.gamePlayers[1].spawn([16,10]);
  }

  update() {
    this.updatePlayersPosition();
  }

  updatePlayersPosition() {
    for(let player=0;player<this.gamePlayers.length; player++) {
      let p = document.getElementById(this.gamePlayers[player].get_id());
      let coords = this.gamePlayers[player].getCoords();
      p.style.left = new String(coords[0] * this.terrain.tile_size) + "px";
      p.style.top = new String(coords[1] * this.terrain.tile_size) + "px";
    }
  }
}
