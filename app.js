const outstandingTotal = document.getElementById("outstandingTotal");
var count = 0;
outstandingTotal.innerHTML = count;

// Variables to get the input field values
var dateEntered = document.getElementById("date"); 
var amountInput = document.getElementById("amount"); 
var sourceInput = document.getElementById("source"); 

const element = document.getElementById("submit");
element.addEventListener("click", createNewEntryListElement);
element.addEventListener("click", calcNewTotal);

// Funtion to calculate and update the outstanding value amount
function calcNewTotal () {
    var amount = +(amountInput.value);
    count += amount;
    outstandingTotal.innerHTML = count;
}

// Function to create a new entry list item
function createNewEntryListElement () {
    const listEntry = document.createElement("li"); 
    const date = document.createElement("p"); 
    const dateNode = document.createTextNode(dateEntered.value);
    date.appendChild(dateNode);
    const source = document.createElement("p"); 
    const sourceNode = document.createTextNode(sourceInput.value);
    source.appendChild(sourceNode);
    const amountEntry = document.createElement("p"); 
    const amountNode = document.createTextNode(amountInput.value);
    amountEntry.appendChild(amountNode);

    // each element needs appending
    listEntry.appendChild(date);
    listEntry.appendChild(source);
    listEntry.appendChild(amountEntry);

    // appending list entries to "entries" element
    const entriesList = document.getElementById("entries");
    entriesList.appendChild(listEntry);

    return listEntry;
}

