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
    highlightDrum(drum);
    switch (drum) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "k":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("./sounds/snare.mp3");
            break;
    }
    audio.play();
}

function highlightDrum(selector) {
    var drum = $("."+selector);
    drum.addClass("active");
    setTimeout(function() { drum.removeClass("active"); }, 100);
}