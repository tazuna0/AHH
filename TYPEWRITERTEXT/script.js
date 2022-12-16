var text = document.querySelector("#text")
var input = document.querySelector(".input")
var speed = 500
var i = 0
var txt = 'Røyken videregående skole'

skrivTeksten()
text.innerHTML = "R";
function skrivTeksten() {
    if (i <= txt.length) {
        text.innerHTML += txt.charAt(i);
        i++;

    }
    if (i > txt.length) {
        i = 1
        text.innerHTML = "R"
    }
    setTimeout(skrivTeksten, speed);
}

input.addEventListener("input", function() {
    speed = 500 / input.value;
    text.innerHTML = ""
    i = 0;
    console.log(i);

})