// Oppgave 1

const FtoCButton = document.querySelector("#FtoC")

FtoCButton.addEventListener("click", function(e) { // konverter fahrenheit til celcius
    e.preventDefault();
    const temperature = document.querySelector("#temperature").value

    console.log(Math.round((temperature - 32) / 1.8))
})

const CtoFButton = document.querySelector("#CtoF")

CtoFButton.addEventListener("click", function(e) { // konverter celcius til fahrenheit
    e.preventDefault();
    const temperature = document.querySelector("#temperature").value

    console.log(Math.round(temperature * 1.8 + 32))
})

// Oppgave 2

var number1 = document.querySelector("#number1")

number1.value = Math.round(Math.random() * (10 - 0) + 0) // finner et tilfeldig tall mellom 0 og 10

var number2 = document.querySelector("#number2")

number2.value = Math.round(Math.random() * (10 - 0) + 0) // finner et tilfeldig tall mellom 0 og 10

const compareButton = document.querySelector("#compare")


compareButton.addEventListener("click", function(randomnumber1, randomnumber2) { // sjekker hvis de to tilfeldige tall er storre, mindre eller lik

    var randomnumber1 = number1.value
    var randomnumber2 = number2.value 

    if (randomnumber1 > randomnumber2) {
        console.log(randomnumber1 + " er storre en " + randomnumber2)
    }
    else if (randomnumber1 < randomnumber2) {
        console.log(randomnumber1 + " er mindre en " + randomnumber2)
    }
    else {
        console.log(randomnumber1 + " er lik " + randomnumber2)
    }
})

// Oppgave 3

var questionedword = document.querySelector("#word")

var check = document.querySelector("#check")

check.addEventListener("click", function(word) { // sjekker hvis ord er et palindrome eller ikke

    var word = questionedword.value

    var arrayValues = word.split('')

    var reverseArrayValues = arrayValues.reverse()

    var reverseString = reverseArrayValues.join('')

    if (word == reverseString) {
        console.log(word + " er et palindrome")
    }
    else {
        console.log(word + " er ikke et palindrome")
    }
})

// Oppgave 4

var redbutton = document.querySelector("#red")
var bluebutton = document.querySelector("#blue")
var randombutton = document.querySelector("#randomcolor")

var div2box = document.getElementById("#div2")
var div3box = document.getElementById("#div3")

redbutton.addEventListener("click", function() {

    var div1box = document.getElementById("div1");

    div1box.style.backgroundColor = "red";

})

bluebutton.addEventListener("click", function() {

    var div2box = document.getElementById("div2");

    div2box.style.backgroundColor = "blue";

})




randombutton.addEventListener("click", function() {
    var colors = ["red", "blue", "green", "black"]
    var randomNumber = Math.round(Math.random() * 3)

    var div3box = document.getElementById("div3");

    div3box.style.backgroundColor = (colors[randomNumber]);

})