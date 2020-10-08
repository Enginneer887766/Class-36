class Form {
  //added the properties
    constructor() {
      this.input=createInput("Name");
      this.button=createButton('Play');
      this.greeting=createElement('h3');
    }
    //hide elements
    hide() {
      this.greeting.hide();
      this.input.hide();
      this.button.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(130, 0);
      
      
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        this.greeting = createElement('h3');
        this.greeting.html("Hello " + name )
        this.greeting.position(130, 160)
      });
  
    }
  }