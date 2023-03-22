class Enemy {
  constructor(ctx, gameW, gameH) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 50;
    this.height = 50;

    this.image = new Image();
    this.image.src = "./Images/enemy.jpg";
    this.image.frames = 3;
    this.image.framesIndex = 0;

    this.minPosX = 80;
    this.maxPosX = 500 - 80;
    this.posX = Math.floor(
      Math.random() * (this.maxPosX - this.minPosX + 1) + this.minPosX
    );
    this.posY = 650;

    this.velY = 2;
  }
  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      (this.image.width / this.image.frames) * this.image.framesIndex,
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.animate(framesCounter);
    this.move();
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }

  move() {
    this.posY -= this.velY;
    if (this.posY <= -this.height) {
      this.posY = 0;
    }
  }
}
