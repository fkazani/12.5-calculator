// Global Variables 
var dateEntered = document.getElementById("date"); // Reading the date value
var amountInput = document.getElementById("amount"); // Reading amount input value and assigning to amountInput variable
var sourceInput = document.getElementById("source"); // Reading source value 
var outstandingAmount = 0; // Assigning an initial 0 value to the outstanding total
document.getElementById("outstandingAmount").innerHTML = outstandingAmount;
const element2 = document.getElementById("submit");
element2.addEventListener("click", createNewEntryListElement);
element2.addEventListener("click", calcNewTotal);

// Funtion to calculate and update the outstanding value amount
function calcNewTotal () {
    var outstandingAmount = 0;
    var newAmount = +(amountInput.value) + outstandingAmount;
    outstandingAmount == newAmount;
    document.getElementById("outstandingAmount").innerHTML = newAmount;
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
    entriesList = document.getElementById("entries");
    entriesList.appendChild(listEntry);

    return listEntry;
}

