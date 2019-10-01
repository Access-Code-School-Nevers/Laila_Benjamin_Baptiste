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
  contructor(appearence, width, height, pos_x, pos_y) {
    this.appearence = appearence;
    this.width = width;
    this.height = height;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.crossable = true;
  }
}

class Terrain {
  constructor(grid_x, grid_y, tile_size){
    this.grid_x = grid_x;
    this.grid_y = grid_y;
    this.tile_size = tile_size;
    this.terrain = new Array([this.grid_x, this.grid_y]);
  }

  //terrain construction
  build() {
    for(var i = 0; i < this.grid_y; i++) {
      for (var j = 0; j < this.grid_x; j++) {
        // récupérer élément "terrain" du html
        var terrain = document.getElementById('terrain');
        // créer variable à ajouter au terrain
        var square = document.createElement('div');
        // définir style du bloc à ajouter
        square.style.width= new String(this.tile_size)+"px";
        square.style.height= new String(this.tile_size)+"px";
        square.style.left=new String(j*this.tile_size)+"px";
        square.style.top=new String(i*this.tile_size)+"px";
        square.style.position='absolute';
        // console.log(j*32, i*32);
        terrain.appendChild(square);


        //obstacles
        if(j%2==1 && i%2==1){
          // obstacle quand x et y sont impairs
          // var obs = new Obstacle("img/obstacle.jpg",32,32,i,j);
          square.style.backgroundColor="#555";
          // this.terrain[i,j] = obs;
        } else {
          //normal quand x et y sont pairs
          // this.terrain[i,j] = new Tile("img/terrain_tile.jpg",32,32,i,j);
          square.style.backgroundColor="#0f0";
        }
      }
    }
    console.log(terrain);
  }

}

terrain = new Terrain(17,11,64);
terrain.build();
