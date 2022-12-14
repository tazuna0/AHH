var personer = [
    {
        navn: "Runar Bålsrud",
        telefonJobb: "+4799988777",
        telefonPrivat: "+478885522",
        epost: "runar@avfallnorge.no",
        stilling: "Administrerende direktør"
    },
    {
        navn: "Sara Wilsgaard",
        telefonJobb: "+4777788999",
        telefonPrivat: "+478885522",
        epost: "sara.wilsgaard@avfallnorge.no",
        stilling: "Medlemskommunikasjon, bærekraft og ombruk."
    }
]

// Endre privatnummer
personer[1].telefonPrivat = "+479996633"
console.log(personer[1].telefonPrivat)

// Slette jobbnummer
delete personer[2].telefonJobb
console.log(personer[2].telefonJobb)