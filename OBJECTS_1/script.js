// Oppgave 1

var bilfirma = {
    firmaNavn: "Thebiler",
    antallAnsatte:  17,
    bilListe: ["BMW", "VOLVO", "TOYOTA"],
    betaltSkatt: true,
    nettside: "www.thebilerbiler.com",
    Informasjon: function() {
        return ("Hallo. Jeg er den som eier denne bedriften. Jeg driver selvsagt mest om biler og bilmerker.")
    }
}

console.log(bilfirma.Informasjon())

// Oppgave 2

bilfirma.firmaNavn = "Nobiler"
console.log(bilfirma.firmaNavn)

// Oppgave 3

bilfirma.bilListe.push("VOLKSWAGEN")
console.log(bilfirma.bilListe)

// Oppgave 4

bilfirma.bilListe.shift() 
console.log(bilfirma.bilListe)

// Oppgave 5

delete bilfirma.nettside
console.log(bilfirma.nettside)

// Oppgave 6

bilfirma.Status = true
console.log(bilfirma.Status)

// Oppgave 7

var list = bilfirma.bilListe
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
    
}

// Oppgave 8

for (const key in bilfirma) {
    console.log(key)
}

// Oppgave 9

for (const key in bilfirma) {
    console.log(bilfirma[key])
}

// Oppgave 10

function findFirstElement(array) {
    return array[0]
}

console.log(findFirstElement(list))

// Oppgave 11

function findLastElement(array) {
    return array[array.length - 1]
}

console.log(findLastElement(list))

// Oppgave 12

var library = [

    {
    
    author: 'Bill Gates',
    
    title: 'The Road Ahead',
    
    readingStatus: true
    
    },
    
    {
    
    author: 'Steve Jobs',
    
    title: 'Walter Isaacson',
    
    readingStatus: false
    
    },
    
    {
    
    author: 'Suzanne Collins',
    
    title: 'Mockingjay: The Final Book of The Hunger Games',
    
    readingStatus: false
    
    }];

for (const i of library) {
    if (i.readingStatus == false) {
        console.log(i.title)
    }
    
}