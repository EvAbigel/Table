let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table');
const tablebody = document.createElement('tbody');
const tableheader = document.createElement('thead');
const tableheaderRow = document.createElement('tr');
const tableheaderRowLastName = document.createElement('th');
const tableheaderRowFirstName = document.createElement('th');
const tableheaderRowMarried = document.createElement('th');
const tableheaderRowPet = document.createElement('th');

tableheaderRowLastName.innerHTML = "Vezeteknev"
tableheaderRowFirstName.innerHTML = "Keresztnev"
tableheaderRowFirstName.colSpan = "2"
tableheaderRowMarried.innerHTML = "Házas"
tableheaderRowPet.innerHTML = "Állat"


document.body.appendChild(table)
table.appendChild(tablebody)
table.appendChild(tableheader)
tableheader.appendChild(tableheaderRow)
tableheaderRow.appendChild(tableheaderRowLastName)
tableheaderRow.appendChild(tableheaderRowFirstName)
tableheaderRow.appendChild(tableheaderRowMarried)
tableheaderRow.appendChild(tableheaderRowPet)

RenderTable();
function RenderTable(){
    for (const person of array){  //person.lastname elérhető

        const tr = document.createElement("tr")
    
        tr.addEventListener('click', function(e)
        {
            const selectedrow = tablebody.querySelector(".selected") //string paraméter, alapvetően tagekkel dolgozik, css-ből veszi át
            e.currentTarget.classList.add('selected')
    
            if (selectedrow != undefined)
                {
                    selectedrow.classList.remove('selected')
                }
                
            console.log('click')
    
        })
    
    
        const td = document.createElement("td")
        const firstname1td = document.createElement("td")
        const marriedtd = document.createElement("td")
        const pettd = document.createElement("td")
    
        td.innerHTML = person.lastname
        firstname1td.innerHTML = person.firstname1
        marriedtd.innerHTML = person.married
        pettd.innerHTML = person.pet
    
        tablebody.appendChild(tr)
        tr.appendChild(td)
        tr.appendChild(firstname1td)
        
    
        if (person.firstname2 === undefined){ // 3db =  az típuscheck és logikai vizsgálat, 2db csak logikai vizsgálat
            firstname1td.colSpan = "2"

            if (person.married)
                marriedtd.innerHTML = "igen"        //innerHtml = person.married ? valami : másvalami
            else
            marriedtd.innerHTML = "nem"
    
            tr.appendChild(marriedtd)
            tr.appendChild(pettd)
        }
        else{
            const firstname2td = document.createElement("td")
            firstname2td.innerHTML = person.firstname2
    
            if (person.married)
                marriedtd.innerHTML = "igen"
            else
            marriedtd.innerHTML = "nem"
    
            tr.appendChild(firstname2td)
            tr.appendChild(marriedtd)
            tr.appendChild(pettd)
        }
    }
}

function ValidateFields(ln, fn1,p){ //HTML elementeket adjuk át
    let result = true
    const errorMessages = form.querySelectorAll('.error')  //ez egy lista, végig kell iterálni

    for (const error of errorMessages)
        error.innerHTML = ''

    if (ln.value === ''){
        const error = ln.parentElement.querySelector('.error')
        error.innerHTML = "Vezetéknév kötelező!"
        result = false
    }
    if (fn1.value === ''){
        const error = fn1.parentElement.querySelector('.error')
        error.innerHTML = "keresztnév kötelező!"
        result = false
    }
    if (p.value === ''){
        const error = p.parentElement.querySelector('.error')
        error.innerHTML = "Kisállat kötelező!"
        result = false
    }

    return result    
}

const form = document.getElementById("form")
form.addEventListener('submit', function(e)
{
    e.preventDefault()
    const LastNameInput = document.getElementById("lastname")
    const FirstNameInput1 = document.getElementById("firstname1")
    const FirstNameInput2 = document.getElementById("firstname2")
    const MarriedInput = document.getElementById("married")
    const PetInput = document.getElementById("pet")

    const LNV = LastNameInput.value
    const FNV = FirstNameInput1.value
    const FNV2 = FirstNameInput2.value

    //const FNV2 = FirstNameInput2.value    //probléma a field-nél üres stringet add vissza a felhasználótól (a visszatérési érték minding string), 
    /* --- 1. megoldás   ------                        // a vizsgálás bedig 'undefined'-al történik

    let FNV2 = FirstNameInput2.value        //const-ot let-re

    if (FNV2 === '')                       //Nem FNV2.value !!!  (FNV2.value.value nincs [ezt keresné(?)])
        FNV2 = undefined

    */
    //

    const MV = MarriedInput.value
    const PV = PetInput.value

    if(ValidateFields(lastname, firstname1, pet))
        {
            array.push({
                lastname: LNV,
                firstname1: FNV,
                firstname2: FNV2 === ''?undefined:FNV2, //2. megoldás  "érték típus egyenlő ez?ha igen akkor az érték undefined:ha nem akkor ugyanaz marad"
                married: MV,
                pet: PV
            })
        }
    
    tablebody.innerHTML = ''; //a táblát le kéne nullázni..
    console.log(array)  //console-ra kiírja hgy változott az array tartalma
        RenderTable();
})


/*
for (const index in array){  //array[index].lastname 
    const person = array[index] // most ugyanolyan mind az első 'for'
}

for (let i = 0; i<array.length; i++){ 
    
}
*/