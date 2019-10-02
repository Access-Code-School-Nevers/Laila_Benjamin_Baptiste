class Terrain {
  constructor(grid_x, grid_y, tile_size){
    this.grid_x = grid_x;
    this.grid_y = grid_y;
    this.tile_size = tile_size;
    this.terrain = new Array([this.grid_x, this.grid_y]);
    this.walls = new Array();
    this.destructableWalls = new Array();
    this.bombs = new Array();
  }

  //terrain construction
  build() {
    let body = document.getElementsByTagName('body')[0];
    let terrain = document.createElement('div');
    terrain.style.position = 'absolute';

    terrain.id = "terrain";

    for(var i = 0; i < this.grid_y; i++) {
      for (var j = 0; j < this.grid_x; j++) {
        let square = document.createElement('div');
        square.style.width= new String(this.tile_size)+"px";
        square.style.height= new String(this.tile_size)+"px";
        square.style.left=new String(j*this.tile_size)+"px";
        square.style.top=new String(i*this.tile_size)+"px";
        square.style.position='absolute';
        square.style.zIndex='1';

        if(j%2==1 && i%2==1){
          square.style.backgroundColor="#555";
          this.walls.push([j,i]);
        } else {
          square.style.backgroundColor="#0c0";
        }
        terrain.appendChild(square);
        body.appendChild(terrain);
      }
    }
  }

  getTerrain() {
    return document.getElementById('terrain');
  }

  compareWallsCoords(coords) {
      if (this.walls[0].length == coords.length) {
      for(let i = 0; i < this.walls.length; i++) {
          if(this.walls[i][0] == coords[0] && this.walls[i][1] == coords[1]) {
            return true;
          }
      }
      return false;
    }
  }
}
