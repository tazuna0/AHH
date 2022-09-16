// oppgave 1

/* function sum(tall1, tall2, tall3) {
    return(tall1 + tall2 + tall3)
}

document.write(sum(2,6,7))
*/

// oppgave 2

/* var number1 = parseInt(prompt("skriv inn et tall"))
var number2 = parseInt(prompt("skriv inn et andre tall"))
var number3 = parseInt(prompt("skriv inn et tredje tall"))

function sum(tall1, tall2, tall3) {
    return(tall1 + tall2 + tall3)
}

document.write(sum(number1,number2,number3))
*/

// oppgave 3

/*function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

var minimum = parseInt(prompt("skriv inn minimum"))
var maximum = parseInt(prompt("skriv inn maximum"))

document.write(Math.round(getRandomNumber(minimum,maximum)))
*/

// oppgave 4

 /* function tableCreation(rows, columns) {
    document.write('<table border="1">')
    
    for (let index = 0; index < rows; index++) {
        document.write('<tr>')
        for (let index = 0; index < columns; index++) {
            document.write('<td>Røyken VGS</td>')
        }
        document.write('</tr>')
    }

    document.write('</table>')
}

tableCreation(8,5)
*/


// oppgave 5

/*function sum(tall1, tall2) {
    return (tall1) + " + " + (tall2) + " = " + (tall1 + tall2) + "<br>"
}

document.writeln(sum(3,5))
document.writeln(sum(8,1))

function puttogether(tall1, tall2) {
    return (tall1) + " + " + (tall2) + " = " + tall1 + tall2 + "<br>"
}

document.writeln(puttogether(3,5))
document.writeln(puttogether(8,1))
*/

// oppgave 6

/* var randomnumber = Math.round(Math.random() * 10)
var randomnumber2 = Math.round(Math.random() * 10)

function activity(firstnumber, secondnumber) {
    if (firstnumber > secondnumber) {
        document.write(firstnumber + " er storre en " + secondnumber)
    }
    else if (firstnumber < secondnumber) {
        document.write(firstnumber + " er mindre en " + secondnumber)
    }
    else {
        document.write(firstnumber + " er lik " + secondnumber)
    }
}

activity(randomnumber, randomnumber2)
*/

// oppgave 7

/*var number1 = parseInt(prompt("skriv inn et tall"))
var number2 = parseInt(prompt("skriv inn et andre tall"))

var symbol = prompt("skriv inn: +, -, * eller /")

function plus(number1, number2) {
        return(number1 + number2)
}

function minus(number1, number2) {
        return(number1 - number2)
}

function multiply(number1, number2) {
        return(number1 * number2)
}

function divide(number1, number2) {
        return(number1 / number2)
}

if (symbol == "+") {
    document.write(plus(number1, number2))
}
else if (symbol == "-") {
    document.write(minus(number1, number2))
}
else if (symbol == "*") {
    document.write(multiply(number1, number2))
}
else if (symbol == "/") {
    document.write(divide(number1, number2))
}
else (
    symbol = prompt("skriv inn BARE: +, -, * eller /")
)
*/

// oppgave 8

/* var number1 = parseInt(prompt("skriv inn et tall"))
var number2 = parseInt(prompt("skriv inn et andre tall"))
var number3 = parseInt(prompt("skriv inn et tredje tall"))


function findMax(a, b, c) {
    if (a > b && c) {
        document.write("den største nummer er " + a)
    }
    else if (b > c && a) {
        document.write("den største nummer er " + b)
    }
    else if (c > b && a) {
        document.write("den største nummer er " + c)
    }
}

document.write(findMax(number1, number2, number3))
*/

// oppgave 9

/* var number1 = parseInt(prompt("skriv inn et tall"))
var number2 = parseInt(prompt("skriv inn et tall"))
var number3 = parseInt(prompt("skriv inn et tall"))
var number4 = parseInt(prompt("skriv inn et tall"))
var number5 = parseInt(prompt("skriv inn et tall"))

var arrayofnumbers = [number1, number2, number3, number4, number5]

arrayofnumbers.sort(function(a, b){return a - b});

document.write(arrayofnumbers)
*/ 

// oppgave 10

/* var randomnumber = Math.round(Math.random() * 10)


function recursion(n) {
    while (true) {
        if (n % 2 == 0) {
            document.write(n + "<br>")
            n = n/2
        }
        else if (n == 1) {
            document.write(n + "<br>")
            break
        }
        else {
            document.write(n)
            n = 3 * n + 1
        }
    }
}

document.write(recursion(randomnumber))
*/