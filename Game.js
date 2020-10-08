class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    //display text when game starts
    play() {
      form.hide();
      textSize(40);
      text("Game Start",200,50);
      player.GetPlayerInfo();
      if (allPlayers === undefined ) {
        var displayPosition = 130;
        for (var newPlayer in allPlayers)
        {
          if (newPlayer === "player" + player.index) {
          fill ("red");
        }
          else {
            fill("black");
            displayPosition += 20;
            textSize(40);
            text( allPlayers[newPlayer].name + ":" + allPlayers[newPlayer].display,X,Y )
          }
          //increase the distance of car 
          if (keyDown ("Up_Arrow") && player.index !== null) {
            player.distance += 50;
            player.update();
          } 

        }
      }
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
  }