// oppgave 1

/* var test = prompt("skriv inn noe eller ingenting")


function stringEmptyCheck(string) {
if (string === "") {
    return "Teksten er tom"
}
else {
    return "Teksten er ikke tom"
}
}

document.write(stringEmptyCheck(test))
*/

// oppgave 2

/*var mytext = "    Røyken Videregående Skole      "  

function sliceText(text) {
    // return text.split(0,1)
    return text.trim().split(" ");
}

document.write(sliceText(mytext))
*/

// oppgave 3

/*var string = prompt("Skrive inn et ord: ")

function checkPalindrome(string) {
    var arrayValues = string.split('')

    var reverseArrayValues = arrayValues.reverse()

    var reverseString = reverseArrayValues.join('')

    if (string == reverseString) {
        return string + ' er et palindrome'
    }
    else {
        return string + ' er ikke et palindrome'
    }
}

document.write(checkPalindrome(string))
*/

// oppgave 4


var mytext = "test word many of them"

function sortAlphabets(text) {
    return text.split('').sort().join('')
}

document.write(sortAlphabets(mytext))
