class Personnage {
  // constructeur de la class Personnage
  constructor() {
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

  moveUp(){
    var position = getPosition();
    setPosition(this.pos_x,this.pos_y-1);
  }
  moveLeft(){
    var position = getPosition();
    setPosition(this.pos_x-1,this.pos_y);
  }
  moveRight(){
    var position = getPosition();
    setPosition(this.pos_x+1,this.pos_y);
  }
  moveDown(){
    var position = getPosition();
    setPosition(this.pos_x,this.pos_y+1);
  }
  dropBomb(){
    var bomb = new Bomb(getPosition);
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

function generate_character() {
  var x = Math.random(0,64);
  console.log(x);
}
