//to ask on friday: married stays true no matter what??

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

createHTMLElement('table', 'personTable', document.body)

createHTMLElementWithParentId('thead', 'personTableHeader', 'personTable')
createHTMLElementWithParentId('tbody', 'personTableBody', 'personTable')
createHTMLElementWithParentId('tr', 'personTableHeaderRow', 'personTableHeader')

renderTableHeader()

RenderTable(array);

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

