class Bullets {

    constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {
  
      this.ctx = ctx;
  
      this.posX = playerPosX + playerWidth /2;
      this.posY = playerPosY + playerHeight;
  
      this.playerPosY0 = playerPosY0;
      this.playerHeight = playerHeight;
  
      this.radius = 10;
  
      this.velX = 1;
      this.velY = 1;
  
      this.gravity = 1;
    }
  
    draw() {
      this.ctx.beginPath();
      // .arc(posX, posY, radius, startAngle, endAngle) + .fill
      this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI *2);
      this.ctx.fill();
      this.ctx.closePath();
      this.move()
    }
  
    move() {
      this.posX += this.velX;
      this.posY += this.velY;
  
      this.velY += this.gravity;
  
      if (this.posY >= this.playerPosY0 + this.playerHeight) { // Rebote
        this.velY *= -1;
      }
    }
  }