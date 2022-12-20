// Reading amount input value and assigning to amountInput variable
var amountInput = document.getElementById("amount");

// Reading the button value and assining to element variable
const element = document.getElementById("addBtn");

// Assigning an initial 0 value to the outstanding total
var outstandingAmount = 0;
document.getElementById("outstandingAmount").innerHTML = outstandingAmount;

// Set the click handler to calcNewTotal function
element.addEventListener("click", calcNewTotal);

// Funtion to calculate and update the outstanding value amount
function calcNewTotal () {
    var outstandingAmount = 0;
    var newAmount = +(amountInput.value) + outstandingAmount;
    outstandingAmount == newAmount;
    document.getElementById("outstandingAmount").innerHTML = newAmount;
}


