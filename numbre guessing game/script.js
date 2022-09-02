

var randomnumber = Math.round(Math.random()*85)
console.log(randomnumber)

let guess = parseInt(prompt("Gjette mitt tall!"))


let i = 0
let tries = 0
while (i < 1) {
tries++
if (guess == randomnumber) {
  document.write("gratulerer! <br> tall var: " + randomnumber + "<br>")
  document.write("du gjettet tallet etter: " + tries + " ganger")
  i++
}
else if (guess > randomnumber) {
  guess = parseInt(prompt("Ditt tall er storre en tall du skal gjette. Prøv igjen"))
}
else if (guess < randomnumber) {
  guess = parseInt(prompt("Ditt tall er mindre en tall du skal gjette. Prøv igjen"))
}
else {
  guess = parseInt(prompt("Prøv igjen"))
}
}