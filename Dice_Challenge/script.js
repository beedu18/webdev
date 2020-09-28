function addDie(selector, number) {
    var attributeValue = "./images/dice"+number+".png";
    document.querySelector("."+selector).setAttribute("src", attributeValue);
}

var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

addDie("img1", randomNumber1);
addDie("img2", randomNumber2);

var element = document.querySelector(".container h1");

if(randomNumber1 === randomNumber2)
    element.innerHTML = "It's a draw!"
else if(randomNumber1>randomNumber2)
    element.innerHTML = "👌 Player 1 wins!"
else
    element.innerHTML = "Player 2 wins! 👌"