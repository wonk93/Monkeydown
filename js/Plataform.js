class Plataform {
    constructor(ctx) {
      this.ctx = ctx;
      this.image = new Image ();
      this.image.src = "./Images/plataforma.png"
      this.width = 100;
      this.height = 27;
  
      
      /*this.minWidth = 80;
      this.maxWidth = 250;
      this.width = Math.floor(
        Math.random() * (this.maxWidth - this.minWidth + 1) + this.minWidth
      );
      this.height = 20;*/
  
    
      this.minPosX = 80
      this.maxPosX = 500 - 80;
      this.posX = Math.floor (
          Math.random() * (this.maxPosX - this.minPosX + 1) + this.minPosX
      );
      this.posY = 650;
  
      this.velY = 1;
    }
    draw() {
  
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
        )

      
      this.move();
      }
      
      move() {
          this.posY -= this.velY;
          if(this.posY <= -this.height){
            this.posY = 0;
          }
      }
      
  }
  /*class Plataform {
    constructor(ctx, gameHeight, playerPosY0, playerHeight) {

      this.minWidth = 80;
      this.maxWidth = 250;
      this.minPosX = 80
      this.maxPosX = 500 - 80;
  
      this.ctx = ctx;
      this.width = 200;
      this.height = 20;
      this.posX = Math.floor(
        Math.random() * (this.maxPosX - this.minPosX +1) + this.minsPosX
      );
      this.posY = this.height;
  
      this.velY = 3;
    }
  
    draw() {
      // .fillRect(posX, posY, w, h);
      this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
          // .move
      //this.move();
    }
  
    move() {
       // Change this.posX (Move horizontally)
       this.posY -= this.velX;
    }
  }*/