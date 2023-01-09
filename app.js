// Declaring variables to define the outstanding total counter
const outstandingTotal = document.getElementById("outstandingTotal");
var count = 0;
outstandingTotal.innerHTML = count;

// Variables to get the input field values
var dateEntered = document.getElementById("date"); 
var amountInput = document.getElementById("amount"); 
var sourceInput = document.getElementById("source"); 

// Declaring the button element vairiable and adding event listeners
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", createNewEntryListElement);
submitBtn.addEventListener("click", calcNewTotal);

// Function to calculate and update the outstanding value amount
function calcNewTotal () {
    var amount = +(amountInput.value);
    count += amount;
    outstandingTotal.innerHTML = count;
}

// Function to create a new entry list item
function createNewEntryListElement () {
    // Creating entries list element
    const listEntry = document.createElement("tr"); 

    // Creating date and date text node element
    const date = document.createElement("td"); 
    const dateNode = document.createTextNode(dateEntered.value);
    
    // Appending date text node to date p element
    date.appendChild(dateNode);

    // Creating source p and text node elements
    const source = document.createElement("td"); 
    const sourceNode = document.createTextNode(sourceInput.value);
    
    // Appending source node to source p element
    source.appendChild(sourceNode);
    
    // Creating amount p element, text node element, assigning id to the element
    const amountEntry = document.createElement("td"); 
    amountEntry.id = "enteredAmount";
    const amountNode = document.createTextNode(amountInput.value);
    
    // Appending amountEntry to amountNode element
    amountEntry.appendChild(amountNode);
    
    // Creating delete button element, assigning innertext, id and type to button element
    const deleteEntry = document.createElement("button");
    deleteEntry.innerText = "Delete";
    deleteEntry.id = "deleteEntry";
    deleteEntry.type = "button";
    
    // Add event listener to reduce the total amount when delete button is clicked
    deleteEntry.addEventListener("click", function () {
        var text = amountEntry.textContent;
        count -= Number(text);
        outstandingTotal.innerHTML = count;
    });

    // each element needs appending
    listEntry.appendChild(date);
    listEntry.appendChild(source);
    listEntry.appendChild(amountEntry);
    listEntry.appendChild(deleteEntry);

    // appending list entries to "entries-list" element
    const entriesList = document.getElementById("entries-list");
    entriesList.appendChild(listEntry);

    return listEntry;
}

// Function to remove a list entry once delete button/icon is clicked
// Pseudo function steps 
// Find the table entry element to be deleted 
// When the delete button event triggers, the element should be deleted from the table entry 


