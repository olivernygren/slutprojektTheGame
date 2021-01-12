class RestartButton {
    x: number; 
    y:number; 
    width:number; 
    prevMouseIsPressed: boolean; 


    constructor(x: number, y:number, width: number){
        this.x = x; 
        this.y = y;  
        this.width = width; 
        this.prevMouseIsPressed = mouseIsPressed; 
    }

    update(){
        if(!this.prevMouseIsPressed && mouseIsPressed) { 
            let d = dist(mouseX, mouseY, this.x, this.y) *2
            if(d < this.width){
                game = new TheGame(); 
                sounds.backgroundMusic.stop()
            }
        }
        this.prevMouseIsPressed = mouseIsPressed; 
    }

    draw(){
        push()
        this.circle();
        fill('white')
        textFont(fonts.poppinsBold); 
        textAlign(CENTER, CENTER)
        textSize(20)
        text("Restart", this.x, this.y);
        pop()
    }

    circle(){
        noStroke();
        noFill(); 
        ellipse(this.x, this.y, this.width); 
    }

}

