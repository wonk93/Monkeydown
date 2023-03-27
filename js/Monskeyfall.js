class Monkey {
  constructor(ctx, gameW, gameH, keys, isCollision) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.isCollision = isCollision;
    this.width = 100;
    this.height = 93;

    this.image = new Image();
    this.image.src = "./Images/Monkeyfly.png";
    this.image.frames = 10;
    this.image.framesIndex = 0;

    this.posX = 250 - 76 / 2;
    this.posY = this.gameHeight - this.height - 400;
    this.gravity = 0.2;

    this.keys = keys;

    this.bullets = [];

    this.setListeners();
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
    this.bullets.forEach(function (bullet) {
      bullet.draw();
    });
    this.clearBullets();
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
    if (this.posY < this.posY) {
      this.posY = this.posY0;
      this.velY = 1;
    }
  }

  /*move() {
    if (this.posY < this.posY0) {   
      this.posY += this.velY;
      this.velY += this.gravity;
    } else {
      this.posY = this.posY0;
      this.velY = 1;
    }
  }*/

  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.LEFT:
          if (this.posX >= 40) {

            if (this.isCollision) {
              this.image.src = "./Images/spriteWalkingLeft.png";
              this.isCollision=false;
            } else {
              this.image.src = "./Images/MonkeyflyLeft.png";
            }

            this.posX -= 20;
          }
          break;
        case this.keys.RIGHT:
       
          if (this.posX + this.width <= this.gameWidth - 40) {
            if (this.isCollision) {
              this.image.src = "./Images/spriteWalkingRight.png";
              this.isCollision=false;
            } else {
              this.image.src = "./Images/Monkeyfly.png";
            }
            this.posX += 20;
          }
          break;
        case this.keys.UP:
          if (this.posY >= 30) {
            this.posY -= 20;
          }
          break;
        case this.keys.DOWN:
          if (this.posY + this.height <= this.gameHeight - 30) {
            this.posY += 20;
          }
          break;
        case this.keys.SHOOTKEY:
          this.shoot();
          break;
      }
    });
  }

  shoot() {
    this.bullets.push(
      new Bullets(
        this.ctx,
        this.posX,
        this.posY,
        this.posY0,
        this.width,
        this.height
      )
    );
  }

  clearBullets() {
    this.bullets = this.bullets.filter((bullet) => {
      return bullet.posX <= this.gameWidth;
    });
  }
}
