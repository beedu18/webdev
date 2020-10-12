var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var useClickedPattern = [];
var level = 0;

$("h1").on("click", function() {
    if(level==0) {
        $("h1").text("Level "+level);
        newSequence();
    }
});

$(".btn").on("click", function() {
    var inProgress = true;
    var color = this.id;
    useClickedPattern.push(color);
    // console.log("user: "+useClickedPattern);
    playSound(color);
    var length = useClickedPattern.length;
    
    //match patterns
    for(var i=0; i<length; i++) {
        if(useClickedPattern[i]!=gamePattern[i]) {
            inProgress = false;
            break;
        }
    }
    
    //if okay
    if(inProgress) { 
        //upgrade level only if full pattern matches
        if(useClickedPattern.length === gamePattern.length) {
            level+=1;
            setTimeout(newSequence, 1000);
            useClickedPattern=[];
            $("h1").text("Level "+level);
        }
    }

    //if not okay
    else {
        $("h1").text("Game Over! Tap here to Restart");
        $("body").addClass("game-over");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        setTimeout(function() { $("body").removeClass("game-over"); }, 100);
        gamePattern=[];
        useClickedPattern=[];
        level=0;   
    }
});

function newSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log("game: "+gamePattern);
}

function playSound(color) {
    var audio;
    $("#"+color).addClass("pressed");
    setTimeout(function() { $("#"+color).removeClass("pressed"); }, 100);
    switch(color) {
        case "red": audio = new Audio("./sounds/red.mp3");
                    break;
        case "blue": audio = new Audio("./sounds/blue.mp3");
                     break;
        case "green": audio = new Audio("./sounds/green.mp3");
                      break;
        case "yellow": audio = new Audio("./sounds/yellow.mp3");
                       break;                          
    }
    audio.play();
}