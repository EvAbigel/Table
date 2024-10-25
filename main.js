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


//const table = document.createElement('table');
//document.body.appendChild(table)

//const tablebody = document.createElement('tbody');
//table.appendChild(tablebody)

//const tableheader = document.createElement('thead');
//table.appendChild(tableheader)

//const tableheaderRow = document.createElement('tr');
//tableheader.appendChild(tableheaderRow)

createHTMLElement('table', 'personTable', document.body)

createHTMLElementWithParentId('thead', 'personTableHeader', 'personTable')
createHTMLElementWithParentId('tbody', 'personTableBody', 'personTable')
createHTMLElementWithParentId('tr', 'personTableHeaderRow', 'personTableHeader')

renderTableHeader()

RenderTable(array);

/**
 * Asks for the fields in the form, if one is empty, it rejects the request to add them
 * @param {*} ln 
 * @param {*} fn1 
 * @param {*} p 
 * @returns 
 */
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
        
    const tablebody = document.getElementById('personTableBody')
    tablebody.innerHTML = ''; //a táblát le kéne nullázni..
    console.log(array)  //console-ra kiírja hgy változott az array tartalma
        RenderTable(array);
    };
    
    form.reset()
}
)

