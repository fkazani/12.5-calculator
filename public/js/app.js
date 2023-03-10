// Declaring variables to define the outstanding total counter
const outstandingTotal = document.getElementById("outstandingTotal");
var count = 0;
outstandingTotal.innerHTML = count;

// Variables to get the input field values
var dateEntered = document.getElementById("date"); 
var amountInput = document.getElementById("amount"); 
var sourceInput = document.getElementById("source"); 
var settleAmount = document.getElementById("settleup");

// Declaring the button element vairiable for submit button and adding event listeners
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", createNewEntryListElement);
submitBtn.addEventListener("click", calcNewTotal);

// Declaring the button element variable for settle balance and adding event listener
const settleBtn = document.getElementById("settle");
settleBtn.addEventListener("click", settleBalance);
settleBtn.addEventListener("click", createSettleEntry);

// Function to calculate and update the outstanding value amount
function calcNewTotal () {
    var amount = +(amountInput.value);
    count += (amount*0.125);
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
    
    // Creating entry amount p element, text node element, assigning id to the element
    const amountEntry = document.createElement("td"); 
    amountEntry.id = "enteredAmount";
    const amountNode = document.createTextNode(amountInput.value);

    // Creating amount p element, text node element, assigning id to the element
    const calcAmount = document.createElement("td"); 
    calcAmount.id = "calcAmount";
    const calcAmountNode = document.createTextNode(amountInput.value*0.125);
    
    // Appending amountEntry to amountNode element
    amountEntry.appendChild(amountNode);

    // Appending calcAmount to calcAmountNode element
    calcAmount.appendChild(calcAmountNode);
    
    // Creating delete button element, assigning innertext, id and type to button element
    const deleteEntryRow = document.createElement("td");
    const deleteEntry = document.createElement("a");
    deleteEntry.href = "#";
    deleteEntry.classList.add("fa");
    deleteEntry.classList.add("fa-times");
    deleteEntry.id = "deleteEntry";
    deleteEntry.style.color = "red";
    deleteEntry.style.fontSize = "20px";
    deleteEntryRow.appendChild(deleteEntry);
    
    // Add event listener to reduce the total amount when delete button is clicked
    deleteEntry.addEventListener("click", function () {
        var text = calcAmount.textContent;
        count -= Number(text);
        outstandingTotal.innerHTML = count;
        deleteRow(this);
    });

    // each element needs appending
    listEntry.appendChild(date);
    listEntry.appendChild(source);
    listEntry.appendChild(amountEntry);
    listEntry.appendChild(calcAmount);
    listEntry.appendChild(deleteEntryRow);

    // appending list entries to "entries-list" element
    const entriesList = document.getElementById("entries-list");
    entriesList.appendChild(listEntry);

    return listEntry;
}

// Function to create a new entry record for settling balance
function createSettleEntry () {
    // Creating entries list element
    const listEntry = document.createElement("tr"); 

    // Defining current date
    const nowDate = new Date().toJSON().slice(0, 10);

    // let year = nowDate.getFullYear();
    // let month = nowDate.getMonth()+1;
    // let day = nowDate.getDate();
    // let currentDate = `${year}-${month}-${day}`;

    // Creating date and date text node element
    const date = document.createElement("td"); 
    const dateNode = document.createTextNode(nowDate);

    // Appending date text node to date p element
    date.appendChild(dateNode);

    // Creating source p and text node elements
    const source = document.createElement("td"); 
    const sourceNode = document.createTextNode("Balance Settled");
    
    // Appending source node to source p element
    source.appendChild(sourceNode);

    // Creating amount p element, text node element, assigning id to the element
    const settleAmountElement = document.createElement("td"); 
    settleAmountElement.id = "settleAmount";
    const settleAmountNode = document.createTextNode(settleAmount.value);
    
    // Appending amountEntry to amountNode element
    settleAmountElement.appendChild(settleAmountNode);

    // each element needs appending
    listEntry.appendChild(date);
    listEntry.appendChild(source);
    listEntry.appendChild(settleAmountElement);

    // appending list entries to "entries-list" element
    const entriesList = document.getElementById("entries-list");
    entriesList.appendChild(listEntry);

    return listEntry;
}

// Function to remove a list entry once delete button/icon is clicked
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("entries-list").deleteRow(i);
}

// Funtion to settle balances and reduce the outstanding total amount
function settleBalance () {
    count -= Number(settleAmount.value);
    outstandingTotal.innerHTML = count;
}