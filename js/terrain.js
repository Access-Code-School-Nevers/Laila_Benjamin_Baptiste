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
  }
}
