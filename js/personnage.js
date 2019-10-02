class Personnage {
  constructor(terrain, id) {
    this.appearence;
    this.coord_x = 0;
    this.coord_y = 0;
    this.alive = true;
    this.terrain = terrain;
    this.id = name;
  }

  set_id(id) {
    this.id = id;
  }

  get_id() {
    return this.id;
  }

  // définition des méthodes
  getCoords() {
    return [this.coord_x, this.coord_y]; // returns [24,12];
  }

  setCoords(coord_arr) { // example setCoords([32,64]);
    this.coord_x = coord_arr[0];
    this.coord_y = coord_arr[1];
  }

  spawn(pos) {
    this.setCoords(pos);

    let terrain = this.terrain.getTerrain();
    let player = document.createElement('div');

    player.style.width = new String(this.terrain.tile_size) + "px";
    player.style.height = new String(this.terrain.tile_size) + "px";
    player.style.left = new String(pos[0] * this.terrain.tile_size) + "px";
    player.style.top = new String(pos[1] * this.terrain.tile_size) + "px";
    player.style.position = 'absolute';
    player.style.zIndex = '2';
    player.style.backgroundColor = "#000";
    player.id = this.id;

    terrain.appendChild(player);
  }

  moveUp() {
    if(this.coord_y > 0 && !this.terrain.compareWallsCoords([this.coord_x, this.coord_y - 1])) {
        this.setCoords([this.coord_x, this.coord_y - 1]);
    }
  }

  moveLeft() {
    if(this.coord_x > 0 && !this.terrain.compareWallsCoords([this.coord_x - 1, this.coord_y])) {
      this.setCoords([this.coord_x - 1, this.coord_y]);
    }
  }

  moveRight() {
    if(this.coord_x < this.terrain.grid_x-1 && !this.terrain.compareWallsCoords([this.coord_x + 1 , this.coord_y])) {
      this.setCoords([this.coord_x + 1 , this.coord_y]);
    }
  }

  moveDown() {
    if(this.coord_y < this.terrain.grid_y-1 && !this.terrain.compareWallsCoords([this.coord_x, this.coord_y + 1])) {
      this.setCoords([this.coord_x, this.coord_y + 1]);
    }
  }

  dropBomb() {
    var bomb = new Bomb(this.terrain,this.getCoords(),(this.id + "_bomb"));
    bomb.plant();
    setTimeout(function() {bomb.explode()}, 1000);

  }
}
