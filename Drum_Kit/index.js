var numberOfDrums = document.querySelectorAll(".drum").length;
var i = 0;
while (i < numberOfDrums) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var drum = this.textContent;
        playSound(drum);
    })
    i++;
}

document.addEventListener("keydown", function(e) {
    playSound(e.key);
})

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
    var drum = document.querySelector("."+selector);
    drum.classList.add("active");
    setTimeout(function() { drum.classList.remove("active"); }, 100);
}