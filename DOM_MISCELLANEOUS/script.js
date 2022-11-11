var firstrange = document.querySelector("#firstrange")
var secondrange = document.querySelector("#secondrange")
var thirdrange = document.querySelector("#thirdrange")
var fourthrange = document.querySelector("#fourthrange")
var fifthrange = document.querySelector("#fifthrange")

var ascending = true
var descending = false


setInterval(() => { while (firstrange.value < 255 && ascending == true) {
    var firstvalue = firstrange.value
    descending = false
    ascending = true
    if (firstvalue >= 254) {
    descending == true
    }
    firstvalue += 1
} }, 500)

while (firstrange.value != 0 && descending == true) {
    var firstvalue = firstrange.value     
    descending = true
    ascending = false
    if (firstvalue <= 1) {
    ascending == true
    }
    firstvalue -= 1
}


var secondvalue = secondrange.value 
var thirdvalue = thirdrange.value 
var fourthvalue = fourthrange.value 
var fifthvalue = fifthrange.value 


