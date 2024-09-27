const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

const table = document.createElement('table');
const tablebody = document.createElement('tbody');
const tableheader = document.createElement('thead');
const tableheaderRow = document.createElement('tr');
const tableheaderRowLastName = document.createElement('th');
const tableheaderRowFirstName = document.createElement('th');

tableheaderRowLastName.innerHTML = "Vezeteknev"
tableheaderRowFirstName.innerHTML = "Keresztnev"
tableheaderRowFirstName.colSpan = "2"

document.body.appendChild(table)
table.appendChild(tablebody)
table.appendChild(tableheader)
tableheader.appendChild(tableheaderRow)
tableheaderRow.appendChild(tableheaderRowLastName)
tableheaderRow.appendChild(tableheaderRowFirstName)

for (const person of array){  //person.lastname elérhető

    const tr = document.createElement("tr")
    const td = document.createElement("td")
    const firstname1td = document.createElement("td")

    td.innerHTML = person.lastname
    firstname1td.innerHTML = person.firstname1

    tablebody.appendChild(tr)
    tr.appendChild(td)
    tr.appendChild(firstname1td)

    if (person.firstname2 === undefined){ // 3db =  az típuscheck, 2db logikai vizsgálat
        firstname1td.colSpan = "2"
    }
    else{
        const firstname2td = document.createElement("td")
        firstname2td.innerHTML = person.firstname2
        tr.appendChild(firstname2td)

    }
}



/*
for (const index in array){  //array[index].lastname 
    const person = array[index] // most ugyanolyan mind az első
}

for (let i = 0; i<array.length; i++){ 
    
}
*/