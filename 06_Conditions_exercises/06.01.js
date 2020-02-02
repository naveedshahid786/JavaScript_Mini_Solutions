// 06.01 JavasScript code

function calculateFee() {

    // Read value from the input field
    var apartmentPrice = Number(document.getElementById("txtPrice").value);
    
    // Calculate fee, save the result to a variable
    var agentFee = apartmentPrice * 3.44 / 100;
    // If the fee is under minimum, change the fee
    if (agentFee <= 2400)
        {
            agentFee = 2400;
        }
    // Write the answer on the page, to the divFeeOutput div, as content of the div
    document.getElementById ("divAnswer").innerHTML = "Real agent fee is "+ agentFee.toFixed(2) + " euros.";
}


