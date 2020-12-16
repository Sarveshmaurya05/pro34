var Car, database, position;

function setup(){
    createCanvas(500,500);
   database=firebase.database()
    Car = createSprite(250,250,10,10);
    Car.shapeColor = "red";
    var carref=database.ref("Ball/position");
    carref.on("value", readposition, showError);
}

function readposition(data){
    positon=data.val()
    Car.x=position.x;
    Car.y=position.y;
}
function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();
 }
}

function changePosition(x,y){
   database.ref("Ball/position").set({
       x:position.x+x, y:position.y+y
   })

   
}

function showError(){
    console.log("unable to read position")
}
