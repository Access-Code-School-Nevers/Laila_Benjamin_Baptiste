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
