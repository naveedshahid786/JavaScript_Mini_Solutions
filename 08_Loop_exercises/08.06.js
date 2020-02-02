// 08.06 JavasScript code

function showComparisonScores() {

    // For each candidate
        // Calculate comparison score for the candidate
    var totalVotes = parseFloat(document.getElementById("txtVotes").value);
    var totalCandidates = parseInt(document.getElementById("txtCandidates").value);
    
    var outputText = "";

    // Show scores
    for (var i = 1; i <= totalCandidates; i++)
        {
            
            var comparison = totalVotes / i;
            outputText += i + ". candidate: " + comparison.toFixed(0) + "<br>";
        }
        document.getElementById("pOutput").innerHTML = outputText;

}
