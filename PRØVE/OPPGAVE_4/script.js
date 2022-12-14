var thetext = "Hva er bærekraftig utvikling? 'En utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov.'"
var search1 = thetext.includes(" bærekraftig ")
var search2 = thetext.includes(" bærekraft ")
console.log(search1);
console.log(search2)

if (search1 == true) {
    console.log("Teksten har ordet 'bærekraftig.'")
}
else {
    console.log("Teksten har ikke ordet 'bærekraftig.'")
}

if (search2 == true) {
    console.log("Teksten har ordet 'bærekraft.'")
}
else {
    console.log("Teksten har ikke ordet 'bærekraft.'")
}