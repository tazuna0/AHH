var randomnumber = Math.round(Math.random()*100)

var numberinput = document.querySelector("#numberinput")
var checkbutton = document.querySelector("#check")
var luckynumberbutton = document.querySelector("#luckynumber")
var higherorlower = document.querySelector("#higherorlower")
var bubble = document.querySelector(".bubble")


checkbutton.addEventListener("click", function() {

    number = numberinput.value 

    if (number == randomnumber) {
        window.alert("Tallet var: " + randomnumber + ". Gratulerer!" )
      }
      else if (number > randomnumber) {
        higherorlower.innerHTML = ("Skriv en tall mindre en " + number) 
      }
      else if (number < randomnumber) {
        higherorlower.innerHTML = ("Skriv en tall storre en " + number)
      }
      else {
        higherorlower.innerHTML = ("Prøv igjen")
}
})

luckynumberbutton.addEventListener("click", function() {

    number = Math.round(Math.random() * 100)
    
    if (number == randomnumber) {
        window.alert("Tallet var: " + randomnumber + ". Gratulerer, du er heldig!" )
    }
    else if (number != randomnumber) {
        higherorlower.innerHTML = (number + " er ikke det nummer du skal gjette. Du er ikke heldig!")
    }

})