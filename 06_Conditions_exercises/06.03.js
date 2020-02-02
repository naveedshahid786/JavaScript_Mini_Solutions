// 06.03 JavasScript code

function comparePackages() {

    // assign input field values into a variables
    var messages = Number(document.getElementById("txtMessages").value);
    var calls = Number(document.getElementById("txtCallTime").value)
    var comparePackages;
    var allInclusivePackage = 29.90
    // calculate the costs of the Special Package
    var specialPackage = 19.90 + (0.069 * calls) + (0.069 * messages);

    // If the Special package is cheaper than the All-inclusive package 
    if (specialPackage < allInclusivePackage)
        
        // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
        // to a variable
        {
            comparePackages = "The special package (" + specialPackage.toFixed(2) + ") is cheaper than All inclusive package (" + allInclusivePackage.toFixed(2) + ")"; 
        }
    // otherwise
        // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
        // to a variable
    else
        {
            comparePackages = "The All Inclusive package (29.90) is cheaper than the Special package (" + specialPackage.toFixed(2) + ")";
        }
    // write the answer to the answer div, as the content
    document.getElementById("divAnswer").innerHTML = comparePackages;
}