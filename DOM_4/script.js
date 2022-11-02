var numberinput = document.querySelector("#numberinput")
var checkbutton = document.querySelector("#check")
var randomnumberbutton = document.querySelector("#randomnumber")
var perfectornot = document.querySelector("#numbertext")
var bubble = document.querySelector(".bubble")

checkbutton.addEventListener("click", function(){
    var number = numberinput.value
    var count = 2
    var numberList = 1

    while (number/2>=count) {
        if (number%count == 0) { 
            numberList += count
        }
        count += 1
    }
    if (numberList == number) {
        perfectornot.innerHTML = (number + " er et perfekt tall!")
        }
    else {
        perfectornot.innerHTML = (number + " er ikke et perfekt tall.")
    }
})

randomnumberbutton.addEventListener("click", function(){
    var randomnumber = Math.round(Math.random() * 10000)
    var count = 2
    var numberList = 1

    while (randomnumber/2>=count) {
        if (randomnumber%count == 0) { 
            numberList += count
        }
        count += 1
    }
    if (numberList == randomnumber) {
        perfectornot.innerHTML = (randomnumber + " er et perfekt tall!")
        }
    else {
        perfectornot.innerHTML = (randomnumber + " er ikke et perfekt tall.")
    }
})

var colorbox = document.querySelector("#colorbox")
var redrange = document.querySelector("#redrange")
var greenrange = document.querySelector("#greenrange")
var bluerange = document.querySelector("#bluerange")

colorbox.addEventListener("input", function() {
    var colors = colorbox.value

    document.body.style.backgroundColor = (colors)
})

function changered(val){
    red=val
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
}
function changegreen(val){
    green=val
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
}
function changeblue(val){
    blue=val
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
}
