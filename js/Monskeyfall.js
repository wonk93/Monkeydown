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
      this.posY = this.gameHeight - this.height - 20;
  
      this.keys = keys;
  
      this.setListeners();
    }
  
    draw() {
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    }
  
    setListeners() {
      document.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
          case this.keys.LEFT:
            if (this.posX >= 80) {
              this.posX -= 20;
            }
            break;
          case this.keys.RIGHT:
            if (this.posX + this.width <= this.gameWidth - 80) {
              this.posX += 20;
            }
            break;
        }
      });
    }
  }