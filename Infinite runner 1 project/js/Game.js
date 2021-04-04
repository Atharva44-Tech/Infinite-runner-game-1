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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

  obj1=createSprite(100,200);
  obj2=createSprite(300,200);
  obj3=createSprite(500,200);
  obj4=createSprite(700,200);
  objs=[obj1,obj2,obj3,obj4] 

  }

  play(){
    form.hide();
   // textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
    //  var display_position = 130;
     var index=0;
     var x=0;
     var y=0;
      for(var plr in allPlayers){
     
        //   if (plr === "player" + player.index)
      //     fill("red")
      //   else
      //     fill("black");

      //   display_position+=20;
      //   textSize(15);
      //   text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      // 
    index=index+1
    x=x+200;
    y=displayHeight-allPlayers[plr].distance-100
    objs[index-1].x=x
    objs[index-1].y=y
    
    }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  drawSprites();
  }
}
