class Personnage {
  // constructeur de la class Personnage
  constructor(appearence, pos_x, pos_y) {
    // initialisation des attributs à la construction de l'objet
    this.appearence = appearence;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.alive = true;
  }

  // définition des méthodes
  getPosition() {
    return array(this.pos_x, this.pos_y); // returns [24,12];
  }

  setPosition(pos_arr) { // example setPosition([32,64]);
    this.pos_x = pos_arr[0];
    this.pos_y = pos_arr[1];
  }
}

class Tile {
  contructor(appearence, width, height, pos_x, pos_y) {
    this.appearence = appearence;
    this.width = width;
    this.height = height;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
  }
}

class Obstacle {
  // call parent class "Tile"
  Tile.call(this,appearence, width, height, pos_x, pos_y);
  this.crossable = false;
}

class Terrain {
  constructor(grid_x, grid_y){
    this.grid_x = grid_x;
    this.grid_y = grid_y;
    this.terrain = new Array([this.grid_x, this.grid_y]);
  }

  //terrain construction
  build() {
    for(var i = 0; i < this.grid_y; i++) {
      for (var j = 0; j < this.grid_x; j++) {
        //obstacles
        if(j%2==1 && i%2==1){
          // obstacle quand x et y sont impairs
          this.terrain[i,j] = new Obstacle("img/obstacle.jpg",32,32,i,j);
        } else {
          //normal quand x et y sont pairs
          this.terrain[i,j] = new Tile("img/terrain_tile.jpg",32,32,i,j);
        }
      }
    }
  }
}

terrain = new Terrain(17,11);
terrain.build();
