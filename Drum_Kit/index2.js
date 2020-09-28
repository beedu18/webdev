$(".drum").on("click", function() {
    // console.log(this.innerHTML);
    var drum = this.innerHTML;
    playSound(drum);
});

$(document).on("keydown", function(e) {
    // console.log(e.key);
    playSound(e.key);
});

function playSound(drum) {
    var audio;
    switch (drum) {
        case "w":
            highlightDrum(drum);
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            highlightDrum(drum);
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            highlightDrum(drum);
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            highlightDrum(drum);
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            highlightDrum(drum);
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            highlightDrum(drum);
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            highlightDrum(drum);
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
    }
}

function highlightDrum(selector) {
    var drum = $("."+selector);
    drum.addClass("active");
    setTimeout(function() { drum.removeClass("active"); }, 100);
}