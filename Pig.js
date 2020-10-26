class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }


  display(){
    if(this.body.speed<10){
      super.display();
    }
    else{
      //speed > 10
      World.remove(world,this.body);
      push();
      //red - 0 - 255
      //green - 0 -255
      //blue - 0-255
      //transperency - 0 -255
      //computer memory - 1 byte = 8 bits
      //fully ON byte = 255 (11111111)
      //fully OFF byte = 0 (00000000)
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      pop();

    }
  }

};