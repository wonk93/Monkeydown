class Jungle {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.image = new Image();
        this.image.src = "./Images/fondo3.png";
        //this.imageYs = [0, -this.height, -this.height * 2];

        this.posX = 0;
        this.posY = 0;

        this.velY = 2;
    }

draw() {
  this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  this.ctx.drawImage(this.image, this.posX, this.posY + this.height, this.width, this.height)
  this.move();
}

move() {
  this.posY -= this.velY;
  if(this.posY <= -this.height){
    this.posY = 0;
  }
}
};


