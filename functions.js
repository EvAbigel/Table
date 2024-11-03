/**
 * Creates a new cell, then adds innerhtml, then appends to parent, 3 inputs needed
 * @param {'td'|'th'} tagName 
 * @param {string} innerH 
 * @param {HTMLTableRowElement} parent
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagName, innerH, parent){
    const element = document.createElement(tagName);
    element.innerHTML= innerH;
    parent.appendChild(element);

    return element;
}

/**
 * Creates a new element, then adds an id, then appends to parent, 3 inputs needed
 * @param {*} tag 
 * @param {string} id 
 * @param {*} parent 
 */
function createHTMLElement(tag, id, parent){
    const element = document.createElement(tag);
    element.id = id;
    parent.appendChild(element);
}

/**
 * Creates a new element with createHTMLElement() but instead of asking for the parent element, it needs a parent id, 3 inputs needed
 * @param {*} tag 
 * @param {*} id 
 * @param {*} parentId 
 */
function createHTMLElementWithParentId(tag, id, parentId){
    const parent = document.getElementById(parentId)

    if (parent){
        createHTMLElement(tag, id, parent)
    }
    else{
        console.log("Az id nem található meg!")
    }
}

/**
 * Creates our tables header
 */
function renderTableHeader(){
    const element = document.getElementById('personTableHeaderRow')
    createTableCell('th', "Vezeteknev", element);

    const kernev = createTableCell('th', "Keresztnev", element)
    kernev.colSpan = 2;

    createTableCell('th', "Hazas", element)
    createTableCell('th', "Allat", element)

}

/**
 * Creates a table, if it already exists, it acts as a refresh 
 */
function RenderTable(personArray){
    for (const person of personArray){  //person.lastname elérhető

        const tableb = document.getElementById('personTableBody') //!!!!!!!!!!!!!!!!!!
        const tr = document.createElement('tr');
        tableb.appendChild(tr)

        tr.addEventListener('click', function(e)
        {
            const selectedrow = tableb.querySelector(".selected") //string paraméter, alapvetően tagekkel dolgozik, css-ből veszi át
            e.currentTarget.classList.add('selected')
    
            if (selectedrow != undefined)
                {
                    selectedrow.classList.remove('selected')
                }
                
            console.log('click')
    
        })
    
    
        
        createTableCell('td', person.lastname, tr)
        const firstname1td = createTableCell('td', person.firstname1, tr)
        
        if (person.firstname2 === undefined){ // 3db =  az típuscheck és logikai vizsgálat, 2db csak logikai vizsgálat
            const marriedtd = createTableCell('td', person.married, tr)
    
            firstname1td.colSpan = "2"

            if (person.married){
                marriedtd.innerHTML = "igen"        //innerHtml = person.married ? valami : másvalami
            }
            else{
                marriedtd.innerHTML = "nem"
            }
        }
        else{
            createTableCell('td', person.firstname2, tr)
            const marriedtd = createTableCell('td', person.married, tr)
    
    
            if (person.married)
                marriedtd.innerHTML = "igen"
            else
                marriedtd.innerHTML = "nem"
        }
        createTableCell('td', person.pet ,tr)
    }
}

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