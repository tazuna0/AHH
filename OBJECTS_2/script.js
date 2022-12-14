var ansatt = [

    {
    
    ansatt_id: 1,
    
    forNavn: "Jorunn",
    
    etterNavn: "Johnsen",
    
    alder: 38,
    
    adress: "100 Internet Dr",
    
    postNummer: 1383,
    
    postSted: "Asker",
    
    jobbNavn: "Manager",
    
    lønn: 60000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "111-111-1111" },
    
    { "Home": "222-222-2222" }
    
    ],
    
    epost: "jorunn@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    
    },
    
    {
    
    ansatt_id: 2,
    
    forNavn: "Rasmuss",
    
    etterNavn: "Rasmussen",
    
    alder: 28,
    
    adress: "101 Internet Dr",
    
    postNummer: 1385,
    
    postSted: "Asker",
    
    jobbNavn: "Analyst",
    
    lønn: 50000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "333-111-1111" },
    
    { "Home": "333-222-2222" }
    
    ],
    
    epost: "rasmuss@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 3,
    
    forNavn: "Andrea",
    
    etterNavn: "Onstad",
    
    alder: 30,
    
    adress: "102 Internet Dr",
    
    postNummer: 3400,
    
    postSted: "Lier",
    
    jobbNavn: "Analyst",
    
    lønn: 50000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "444-111-1111" },
    
    { "Home": "444-222-2222" }
    
    ],
    
    epost: "andrea@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 4,
    
    forNavn: "Marius",
    
    etterNavn: "Helseth",
    
    alder: 25,
    
    adress: "102 Internet Dr",
    
    postNummer: 3427,
    
    postSted: "Gullaug",
    
    jobbNavn: "kontorist",
    
    lønn: 40000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "555-111-1111" },
    
    { "Home": "555-222-2222" }
    
    ],
    
    epost: "marius@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    
    },
    
    {
    
    ansatt_id: 5,
    
    forNavn: "Tom",
    
    etterNavn: "Rin Tin Tin",
    
    alder: 25,
    
    adress: "104 Internet Dr",
    
    postNummer: 3427,
    
    postSted: "Gullaug",
    
    jobbNavn: "kontorist",
    
    lønn: 40000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "666-111-1111" },
    
    { "Home": "666-222-2222" }
    
    ],
    
    epost: "joris@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 6,
    
    forNavn: "Jostein",
    
    etterNavn: "Winsnes",
    
    alder: 45,
    
    adress: "105 Internet Dr",
    
    postNummer: 3400,
    
    postSted: "Lier",
    
    jobbNavn: "Manager",
    
    lønn: 60000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "777-111-1111" },
    
    { "Home": "777-222-2222" }
    
    ],
    
    epost: "jostein@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    },
    
    {
    
    ansatt_id: 7,
    
    forNavn: "Markus",
    
    etterNavn: "Snare",
    
    alder: 41,
    
    adress: "106 Internet Dr",
    
    postNummer: 3400,
    
    postSted: "Lier",
    
    jobbNavn: "portier",
    
    lønn: 35000,
    
    state: true,
    
    phoneNumbers: [
    
    { "Mobile": "888-111-1111" },
    
    { "Home": "888-222-2222" }
    
    ],
    
    epost: "markus@gmail.com",
    
    navn: function () {
    
    return this.forNavn+" "+this.etterNavn;
    
    },
    
    bildet: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    }
    
    ];


// Oppgave 1

for (const i of ansatt)  {
    console.log(i.forNavn);
    console.log(i.etterNavn);
}

// Oppgave 2

ansatt[1].alder = 29
console.log(ansatt[1].alder)

// Oppgave 3

ansatt[6].phoneNumbers.push( { "Bedrifts": "888-000-1112" } )
console.log(ansatt[6].phoneNumbers)

// Oppgave 4

delete ansatt[3].epost
console.log(ansatt[3].epost)

// Oppgave 5

for (let i = 0; i <= 7; i++) {
    var id = ansatt[i]
    img = document.body.createElement("img")
    id.bildet = img.src
    console.log(img.src)
}