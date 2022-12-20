// Global Variables 

var dateEntered = document.getElementById("date"); // Reading the date value
var amountInput = document.getElementById("amount"); // Reading amount input value and assigning to amountInput variable
const element = document.getElementById("addBtn"); // Reading the button value and assining to element variable
var outstandingAmount = 0; // Assigning an initial 0 value to the outstanding total
document.getElementById("outstandingAmount").innerHTML = outstandingAmount;
element.addEventListener("click", calcNewTotal); // Set the click handler to calcNewTotal function

// Funtion to calculate and update the outstanding value amount
function calcNewTotal () {
    var outstandingAmount = 0;
    var newAmount = +(amountInput.value) + outstandingAmount;
    outstandingAmount == newAmount;
    document.getElementById("outstandingAmount").innerHTML = newAmount;
}

// Function to create a new entry list item
var createNewEntryListElement = function () {
    var listEntry = document.createElement("li"); // create list entry
    var date = document.createElement("p"); // entry date
    var label = document.createElement("p"); // entry label
    var amountEntry = document.createElement("p"); // entry amount 

    // each element needs appending
    listEntry.appendChild(date);
    listEntry.appendChild(label);
    listEntry.appendChild(amountEntry);

    return listEntry;
}

