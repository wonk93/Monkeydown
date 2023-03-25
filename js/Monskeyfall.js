class Monkey {
    constructor(ctx, gameW, gameH, keys) {
      this.ctx = ctx;
      this.gameWidth = gameW;
      this.gameHeight = gameH;
  
      this.width = 50;
      this.height = 100;
  
      this.image = new Image();
      this.image.src = "./Images/Monkey.jpg";
  
      this.posX = 250 - 76 / 2;
      this.posY = this.gameHeight - this.height - 400;
      this.gravity = 0.2;
  
      this.keys = keys;

      this.bullets = [];
  
      this.setListeners();
    }
  
    draw() {
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
        )
       /* this.bullets.forEach(function(bullet){
          bullet.draw();
        })
        this.clearBullets();
      }*/
    }

    move() {
      if (this.posY < this.posY) { 
        this.posY = this.posY0;
        this.velY = 1;
      }
    }
  
    setListeners() {
      document.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
          case this.keys.LEFT:
            if (this.posX >= 40) {
              this.posX -= 20;
            }
            break;
          case this.keys.RIGHT:
            if (this.posX + this.width <= this.gameWidth - 40) {
              this.posX += 20;
            }
            break;
            case this.keys.UP:
              if (this.posY >= 30){
                this.posY -=20;
              }    
              break; 
            case this.keys.DOWN:
                if (this.posY + this.height <= this.gameHeight - 30){
                  this.posY +=20;
                }    
                break;        
        }
      });
    }
  }