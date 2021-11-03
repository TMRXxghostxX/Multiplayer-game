var ball;
var database;

function setup(){
    database=firebase.database()
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    let ballPosition = database.ref("Pelota/Posicion")
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position=data.val();
    ballPosition.x = position.x;
    ballPosition.y = position.y;
}

function writePosition(x,y){
    database.ref("Pelota/Posicion").set({
        x:position.x+x,
        y:position.y+y
    })
}

function showError(){
    console.log("Error")
}