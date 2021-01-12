class MuteButton {
    x: number; 
    y:number; 
    width:number; 
    prevMuteIsPressed: boolean; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;

    constructor(x: number, y:number, r: number){
        this.x = x; 
        this.y = y;  
        this.width = r; 
        this.prevMuteIsPressed = mouseIsPressed; 
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');

    }

    update(){
        if(!this.prevMuteIsPressed && mouseIsPressed) { 
            let mute = dist(mouseX, mouseY, this.x, this.y) *2
            if(mute < this.width) {
                console.log('mute music')
            }
        }
        this.prevMuteIsPressed = mouseIsPressed; 

    }

    draw(){
        push()
        this.circle();
        fill('white')
        textFont(this.poppinsLight); 
        textAlign(CENTER, CENTER)
        pop()
    }

    circle(){
        noStroke();
        noFill(); 
        ellipse(this.x, this.y, this.width); 
        
    }

    
    
}

