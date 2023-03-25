window.onload = () => {
    document.getElementById('start-button').onclick = (event) => {
      event.preventDefault(); //Con esto se consigue que se inicie solo haciendo clock en el boton
      startGame();
    };
  
    function startGame() {
      return Game.init();
    }
  };