class Plataform {
    constructor(ctx) {
      this.ctx = ctx;
  
      
      this.minWidth = 80;
      this.maxWidth = 250;
      this.width = Math.floor(
        Math.random() * (this.maxWidth - this.minWidth + 1) + this.minWidth
      );
      this.height = 20;
  
    
      this.minPosX = 80
      this.maxPosX = 500 - 80;
      this.posX = Math.floor (
          Math.random() * (this.maxPosX - this.minPosX + 1) + this.minPosX
      );
      this.posY = 0;
  
      this.velY = 1;
    }
    draw() {
  
      this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
      this.ctx.fillStyle = '#881011';
      this.move();
      }
      
      move() {
          this.posY += this.velY
      }
      
  }