"use strict";
class FallingObject {
    constructor() {
    }
    update() {
    }
    draw() {
    }
    falling() {
    }
    getPoints() {
    }
    random() {
    }
    loop() {
    }
}
class BadThing extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 3;
        this.hitbox = {
            x: this.position.x + 7,
            y: this.position.y + 25,
            width: 15,
            height: 50,
        };
    }
    update() {
        this.falling();
        this.hitbox.y = this.position.y + 25;
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 30, 80);
        drawRectFromHitbox(this.hitbox);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class Environment {
    constructor() {
        this.platform = loadImage('assets/bg-1250.png');
    }
    draw() {
        background(this.platform);
        strokeWeight(6);
        point(0, 650);
        point(0, 600);
        point(45, 600);
        point(90, 590);
        point(130, 580);
        point(170, 580);
        point(210, 600);
        point(250, 600);
        point(290, 600);
        point(330, 590);
        point(370, 585);
        point(410, 580);
        point(450, 590);
        point(490, 590);
        point(530, 595);
        point(570, 580);
        point(610, 575);
        point(650, 570);
        point(690, 570);
        point(730, 575);
        point(770, 580);
        point(800, 590);
        point(860, 600);
        point(920, 600);
        point(980, 600);
        point(1040, 600);
        point(1100, 590);
        point(1160, 590);
        point(1200, 600);
        point(1250, 600);
        point(1250, 650);
        strokeWeight(1);
        fill(0);
        beginShape();
        curveVertex(600, 0);
        curveVertex(0, 650);
        curveVertex(0, 600);
        curveVertex(0, 600);
        curveVertex(0, 650);
        curveVertex(0, 600);
        curveVertex(45, 600);
        curveVertex(90, 590);
        curveVertex(130, 580);
        curveVertex(170, 580);
        curveVertex(210, 600);
        curveVertex(250, 600);
        curveVertex(290, 600);
        curveVertex(330, 590);
        curveVertex(370, 585);
        curveVertex(410, 580);
        curveVertex(450, 590);
        curveVertex(490, 590);
        curveVertex(530, 595);
        curveVertex(570, 580);
        curveVertex(610, 580);
        curveVertex(650, 578);
        curveVertex(690, 582);
        curveVertex(730, 575);
        curveVertex(770, 580);
        curveVertex(800, 590);
        curveVertex(860, 600);
        curveVertex(920, 600);
        curveVertex(980, 600);
        curveVertex(1040, 600);
        curveVertex(1100, 590);
        curveVertex(1160, 590);
        curveVertex(1200, 600);
        curveVertex(1250, 600);
        curveVertex(1250, 650);
        curveVertex(1250, 650);
        endShape();
    }
}
class ExtraLife extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/1-up.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 4;
        this.hitbox = {
            x: this.position.x + 25,
            y: this.position.y + 20,
            width: 30,
            height: 30,
        };
    }
    update() {
        this.falling();
        this.hitbox.y = this.position.y + 20;
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 80, 60);
        drawRectFromHitbox(this.hitbox);
    }
    falling() {
        if (this.position.x <= width) {
            if (this.position.x > width - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class GameStatusbar {
    constructor() {
        this.pointsCounter = 0;
        this.characterHP = 3;
        this.score = 0;
        this.img = loadImage('assets/musicPlay.png');
        this.starImg = loadImage('assets/starhp.png');
        this.noVolume = loadImage('assets/noVolume.png');
        this.position = createVector(0, height - 87);
        this.oneUpImg = loadImage('assets/miniOneUp.png');
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
    }
    update() {
    }
    draw() {
        fill('white');
        textFont(this.poppinsBold);
        textSize(20);
        text("Restart", 1120, this.position.y + 80);
        image(this.img, this.position.x + 1050, this.position.y + 55);
        image(this.oneUpImg, this.position.x + 180, this.position.y + 60);
        text(' ' + this.characterHP, this.position.x + 220, this.position.y + 80);
        image(this.starImg, this.position.x + 80, this.position.y + 55);
        text('' + this.score, this.position.x + 125, this.position.y + 80);
    }
}
function rectangleOverlapsPoint(rectangle, point) {
    if (point.x > rectangle.x && point.x < rectangle.x + rectangle.width) {
        return point.y > rectangle.y && point.y < rectangle.y + rectangle.height;
    }
    return false;
}
function rectangleOverlapsRect(rectangle1, rectangle2) {
    const rightBottomCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y,
    };
    const rightUpperCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y + rectangle2.height,
    };
    const leftUpperCorner = {
        x: rectangle2.x,
        y: rectangle2.y + rectangle2.height,
    };
    return (rectangleOverlapsPoint(rectangle1, rectangle2) ||
        rectangleOverlapsPoint(rectangle1, rightBottomCorner) ||
        rectangleOverlapsPoint(rectangle1, rightUpperCorner) ||
        rectangleOverlapsPoint(rectangle1, leftUpperCorner));
}
function drawRectFromHitbox(hitbox) {
    rect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
}
class Player {
    constructor() {
        this.debug = false;
        this.playerImgLeft = [];
        this.playerImgRight = [];
        this.setupImages();
        this.img = this.playerImgLeft[0];
        this.position = new p5.Vector();
        this.position.x = 500;
        this.speed = new p5.Vector();
        this.speed.x = 7;
        this.frameCounter = 1;
        this.characterHP = 3;
        this.playerHitboxRectangle = {
            x: this.position.x + 78,
            y: 460,
            width: 70,
            height: 100,
        };
        this.bucketHitboxRectangle = {
            x: this.position.x + 13,
            y: 510,
            width: 60,
            height: 8,
        };
    }
    setupImages() {
        const playerImgCount = 7;
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgLeft.push(loadImage('assets/player-left' + i + '.png'));
        }
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgRight.push(loadImage('assets/player-right' + i + '.png'));
        }
    }
    movement() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.position.x -= this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgLeft[current];
            this.bucketHitboxRectangle.x = this.position.x + 13;
            this.playerHitboxRectangle.x = this.position.x + 78;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgRight[current];
            this.bucketHitboxRectangle.x = this.position.x + 78;
            this.playerHitboxRectangle.x = this.position.x;
        }
    }
    update() {
        this.movement();
    }
    draw() {
        this.frameCounter += 1;
        image(this.img, this.position.x, this.position.y + 460, 150, 150);
        fill("#cccccc");
        if (!this.debug) {
            noFill();
            noStroke();
        }
        drawRectFromHitbox(this.playerHitboxRectangle);
        drawRectFromHitbox(this.bucketHitboxRectangle);
    }
    playerCollision(hitbox) {
        return rectangleOverlapsRect(this.playerHitboxRectangle, hitbox);
    }
    bucketCollision(hitbox) {
        return rectangleOverlapsRect(this.bucketHitboxRectangle, hitbox);
    }
}
let game;
function preload() {
}
function setup() {
    let cnv = createCanvas(1250, 650);
    let x = (windowWidth - width) / 2;
    cnv.position(x);
    frameRate(60);
    game = new TheGame();
}
function draw() {
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class Star extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 4;
        this.hitbox = {
            x: this.position.x + 10,
            y: this.position.y + 50,
            width: 20,
            height: 20,
        };
    }
    update() {
        this.falling();
        this.hitbox.y = this.position.y + 50;
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 70);
        drawRectFromHitbox(this.hitbox);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class StuffedAnimal {
    constructor() {
        this.img = loadImage('assets/trophy.png');
        this.position = createVector(245, 75);
    }
    update() {
        for (let i = this.position.y; i < 500; i++) {
            this.position.y += 0.1;
        }
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 70, 120);
    }
}
class TheGame {
    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = [];
        this.spawnTimer = 0;
        this.spawnTimerHeart = 0;
        this.player = new Player();
        this.environment = new Environment();
        this.gameStatusbar = new GameStatusbar();
        this.stuffedAnimal = new StuffedAnimal();
    }
    update() {
        this.player.update();
        this.star.update();
        this.badthing.update();
        this.extraLife.update();
        this.checkCollision();
        this.spawnNewObject();
        if (this.gameStatusbar.score < 100) {
            for (const fallingObj of this.fallingObjects) {
                fallingObj.update();
            }
        }
        if (this.gameStatusbar.score === 100) {
            this.stuffedAnimal.update();
        }
        if (this.gameStatusbar.characterHP == 0) {
        }
        this.gameStatusbar.update();
    }
    draw() {
        clear();
        this.environment.draw();
        this.player.draw();
        if (this.gameStatusbar.score < 100) {
            for (const fallingObj of this.fallingObjects) {
                fallingObj.draw();
            }
        }
        if (this.gameStatusbar.score === 100) {
        }
        if (this.gameStatusbar.characterHP == 0) {
        }
        this.gameStatusbar.draw();
        this.stuffedAnimal.draw();
    }
    spawnNewObject() {
        if (this.spawnTimer > 1500) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());
        }
        if (this.spawnTimerHeart > 15000) {
            this.spawnTimerHeart = 0;
            this.fallingObjects.push(new ExtraLife());
        }
        this.spawnTimerHeart += deltaTime;
        this.spawnTimer += deltaTime;
    }
    checkCollision() {
        for (const fallingObj of this.fallingObjects) {
            let i = this.fallingObjects.indexOf(fallingObj);
            if (fallingObj instanceof Star) {
                if (this.player.bucketCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Poäng");
                    this.gameStatusbar.score = this.gameStatusbar.score + 10;
                }
            }
            if (fallingObj instanceof BadThing) {
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Ouch");
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP - 1;
                    this.gameStatusbar.score = this.gameStatusbar.score - 10;
                }
            }
            if (fallingObj instanceof ExtraLife) {
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("1up!!!");
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP + 1;
                }
            }
        }
    }
}
//# sourceMappingURL=bundle.js.map