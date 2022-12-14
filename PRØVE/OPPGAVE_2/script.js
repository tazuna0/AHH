var y2019 = document.querySelector(".y2019")
var y2020 = document.querySelector(".y2020")
var y2021 = document.querySelector(".y2021")
var outputbutton = document.querySelector(".outputbutton")

outputbutton.addEventListener("click", function(){
    var y19value = y2019.value
    var y20value = y2020.value
    var y21value = y2021.value

    if (y19value >= y20value && y19value >= y21value) {
        console.log("i 2019 var det " + y19value + " prosjekter.")
    }
    else if (y20value >= y19value && y20value >= y21value) {
        console.log("i 2020 var det " + y20value + " prosjekter.")
    }
    else {
        console.log("i 2021 var det " + y21value + " prosjekter.")
    }

})