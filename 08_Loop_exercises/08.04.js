// 08.04 JavasScript code

	
// Randomize the pips1 and pips2 once
// Set the count to be one (now you have randomized once)
    var pips1 = Math.round((Math.random() * 5) + 1);
    var pips2 = Math.round((Math.random() * 5) + 1);
    var count = 1;
// Repeat as long as (pips are not equal) 
    while (pips1 != pips2) {
    // Randomize again
        pips1 = Math.round((Math.random() + 5) + 1);
        pips2 = Math.round((Math.random() + 5) + 1);
    // Increment counter by one
        count++;
// Write the answer (including the count) to the html page with the document.write() method
        document.write("Same dice pips: " + pips1+ " and " + pips2 + "<br>" + "There are " + count + " randomizations until we got the same pips.");
    }
