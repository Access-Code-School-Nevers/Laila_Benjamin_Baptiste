class Bomb {
  constructor(terrain,position,id) {
    this.pos_x = position[0];
    this.pos_y = position[1];
    this.counter = 0;
    this.terrain = terrain;
    this.id = id;
  }

  plant() {
    var terrain = this.terrain.getTerrain();
    var b = document.createElement('div');
    b.style.width = new String(this.terrain.tile_size)+"px";
    b.style.height = new String(this.terrain.tile_size)+"px";
    b.style.position = "absolute";
    b.style.zIndex = '4';
    b.style.backgroundColor = "yellow";
    b.style.borderRadius = new String(this.terrain.tile_size/2) + "px";
    b.style.top = new String(this.pos_y * this.terrain.tile_size) + "px";
    b.style.left = new String(this.pos_x * this.terrain.tile_size) + "px";

    b.id = this.id;
    terrain.appendChild(b);
    console.log(document.getElementById(this.id));


  }

  explode() {
    var terrain = document.getElementById('terrain');
    var b = document.getElementById(this.id);
    terrain.removeChild(b);
  }

  get_id() {
    return this.id;
  }
}
