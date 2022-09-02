// oppgave 1

/* var number = 1

while (number <= 50) {
    if (number % 2 == 0) {
        document.writeln(number)
    }
    number++
}
*/


// oppgave 2

/* var number = 1

while (number <= 100) {
    if (number % 3 == 0 && number % 5 == 0) {
        document.writeln(number)
    }
    number++
}
*/

// oppgave 3



// oppgave 4

/* var number = 1

while (number <= 50) {
    if (number % 2 == 0) {
        document.write("<p style='color:blue;'>" + number + "</p>")
    }
    else {
        document.write("<p style='color:red;'>" + number + "</p>")
    }
    number++
}
*/

// oppgave 5

var thepasswordinquestion = "987521"

var password = prompt("skriv inn passordet ditt")
var chances = 1

while (chances < 3) {
    if (password == thepasswordinquestion) {
        document.write("du har kommet inn!")
        chances = 5
    }
    else {
        password = prompt("skriv inn passordet ditt igjen")
        chances++
        if (chances = 4) {
            document.write("du kan ikke logge inn lenger")
        }
    }
    
}
