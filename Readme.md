<h1>MONKEYDOWN</h1>
<h2>Descripción</h2>
<p>El juegador debe sortear los murcielagos según esta cayendo para no morir. Puede posarse en las plataformas mientras los esquiva o los mata. En caso de que algún murcielago lo alcance, muere.</p>

<h2>MVP</h2>

<p>El juego es de un sólo jugador, el jugador debe moverse con las fechas de arriba, abajo, izquierda y derecha.</p>

<h2>Reserva</h2>

<p><ul>
<li>Agrega instrucciones del juego en la pantalla de inicio</li>
<li>Para iniciar el juego hay que darle con el ratón al botón</li>
<li>Mueve el personaje con las fechas</li>
</ul>
</p>

<h2>Estructura de datos</h2>
<h3>Game</h3> 
'''Javascript
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
        }
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
    
    </p>

    <h3>MONSKEYDOWN</h3>

    <p>class Monkey {
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
  '''

  <h2>Enlaces</h2>
