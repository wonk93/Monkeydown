const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    obstacles: [],
    enemy:[],
    blackgroundMusic: undefined,
  
    keys: {
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SHOOTKEY: 81,
    },
  
    init() {
      this.setContext();
      this.setDimensions();
      this.start();
      this.blackgroundMusic = new Audio();
      this.blackgroundMusic.volume = 0,3;
      
    },
  
    setContext() {
      this.canvas = document.querySelector("#canvas");
      this.ctx = this.canvas.getContext("2d");
    },
  
    setDimensions() {
      this.width = 500;
      this.height = 700;
  
      this.canvas.setAttribute("width", this.width);
      this.canvas.setAttribute("height", this.height);
    },
  
    start() {
      this.reset();
      this.interval = setInterval(() => {
        this.framesCounter++; 
        if (this.framesCounter > 3000) {
          this.framesCounter = 0;
        }
        this.clear();
        this.generateObstacles();
        this.generateEnemy();
        this.drawAll();
        this.clearEnemy();
        this.clearObstacles();
        if (this.isCollision() === true) {
        this.player.isCollision = true}
        if (this.isCollisionEnemy()){
          this.gameOver();
        }
      }, 1000 / this.FPS);
    },
  
    reset() {
      this.background = new Jungle(this.ctx, this.width, this.height);
      this.player = new Monkey(this.ctx, this.width, this.height, this.keys, this.isCollision());
      this.obstacles = []; //new Plataform(this.ctx, this.width, this.height);
    },

    
  
    drawAll() {
      this.background.draw();
      this.player.draw(this.framesCounter);
      this.obstacles.forEach((obs) => {
        obs.draw(); });
      this.enemy.forEach((obs) => {
        obs.draw(this.framesCounter);
      });
      },

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateEnemy() {
      if (this.framesCounter % 800 === 0) {
        this.enemy.push(new Enemy(this.ctx, this.width, this.height));
    }
  },

    clearEnemy() {
      this.enemy = this.enemy.filter(function (obs) {
        return obs.posY >= 0;
      });
    },
  
   generateObstacles() {
      if (this.framesCounter % 300 === 0) {
        this.obstacles.push(new Plataform(this.ctx));
        
      }
    },
  
    clearObstacles() {
      this.obstacles = this.obstacles.filter(function (obs) {
        return obs.posY >= 0;
      });
    },
  
    isCollision() {
      return this.obstacles.some((obs) => {//usar some que devuelve true or false
  
        if (this.player.posX <= obs.posY + obs.width &&
                this.player.posX + this.player.width >= obs.posX &&
                this.player.posY <= obs.posY + obs.height &&
                this.player.height + this.player.posY >= obs.posY) {
          
          return true;
        }
         return false;

      });
    },

    isCollisionEnemy (){
      return this.enemy.forEach((obs) => {
        if (
          this.player.posX <= obs.posY + obs.width &&
          this.player.posX + this.player.width >= obs.posX &&
          this.player.posY <= obs.posY + obs.height &&
          this.player.height + this.player.posY >= obs.posY
        ){
          this.player.posY = obs.posY - this.player.height;
        }
      });
    },
  
    gameOver() {
      clearInterval(this.interval);
    },
  };
  