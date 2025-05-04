// all variables
var CurrLevel = 1;
var sequence = [];
var sequencePtr = -1;

var green = new Audio("./sounds/green.mp3");
var red = new Audio("./sounds/red.mp3");
var yellow = new Audio("./sounds/yellow.mp3");
var blue = new Audio("./sounds/blue.mp3");
var wrong = new Audio("./sounds/wrong.mp3");

// eventlistners
$(".green").on("click",btnClicked);
$(".red").on("click",btnClicked);
$(".yellow").on("click",btnClicked);
$(".blue").on("click",btnClicked);

$(document).keypress(function(){
    if($("h1").text()===("Level "+CurrLevel)){
        return;
    }

    $("h1").text("Level " + CurrLevel);
    addTile();
});

//functions
function btnClicked(){
    //add pressed
    var type = this.id;
    $("."+type).addClass("pressed");
    setTimeout(function(){$("."+type).removeClass("pressed");},200);

    //agar abhi kuch click nahi hona tha
    if(sequencePtr===-1){
        resetLevels();
        return;
    }

    //click sound functionalities
    if(type==="green"){
        green.play();
    }
    else if(type==="red"){
        red.play();
    }    
    else if(type==="yellow"){
        yellow.play();
    }
    else{
        blue.play();
    }

    //change of levels and sequencePtr
    if(this.id===sequence[sequencePtr]){
        sequencePtr++;
        if(sequencePtr>=sequence.length){
            sequencePtr = -1;
            CurrLevel++;
            $("h1").text("Level " + CurrLevel);
            addTile();
        }
    }
    else{
        resetLevels();
    }
}

//kuch bhi galat karoge to levels reset ho jaayenge
function resetLevels(){
    wrong.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");},200);
    CurrLevel = 1;
    sequence = [];
    sequencePtr = -1;
}

function addTile(){
    var a = Math.floor(Math.random()*4)+1;
    
    if(a==1){
        green.play();
        $(".green").fadeOut();
        setTimeout(function(){$(".green").fadeIn();},200);
        sequence.push("green");

    }    
    else if(a==2){
        red.play();
        $(".red").fadeOut();
        setTimeout(function(){$(".red").fadeIn();},200);
        sequence.push("red");

    }    
    else if(a==3){
        yellow.play();
        $(".yellow").fadeOut();
        setTimeout(function(){$(".yellow").fadeIn();},200);
        sequence.push("yellow");

    }    
    else{
        blue.play();
        $(".blue").fadeOut();
        setTimeout(function(){$(".blue").fadeIn();},200);
        sequence.push("blue");

    }
    
    if(sequencePtr===-1){
        sequencePtr=0;
    }

}

