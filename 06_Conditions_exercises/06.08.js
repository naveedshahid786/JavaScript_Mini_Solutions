// 06.08 JavasScript code

function play() {
    // Read value from the input field
    var bet = Number(document.getElementById("txtBet").value);
    var outputText;
    // Randomize dice pips between 1-6
    var pips = Math.round((Math.random() * 5) + 1);
    // Calculate win base on pips
    if (pips == 1 || pips == 3 || pips == 5)
        {
            outputText = "Pips was " + pips + " - No pay"; 
        }
    else if (pips == 2 || pips == 4)
        {
            outputText = "Pips was " + pips + " - Paid back: " + bet.toFixed(2) * 1.25 + " euros";
        }
    else
        {
            outputText = "Pips was " + pips + " - Paid back: " + bet.toFixed(2) * 1.50 + " euros";
        }
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("divAnswer").innerHTML = outputText;
}
