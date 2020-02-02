// 08.08 JavasScript code

function calculateProfit() {
    // Read value of rounds from the input field
    var rounds = parseFloat(document.getElementById("txtRounds").value);
    var bet = 1;
    var win = 0;
    // Make a loop which is executed as many times as was set through the input field. 
    // Let win counter cumulating during every round of the loop. 
    for (var counter = 1; counter <= rounds; counter++) 
        {
             bet += counter;
    
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
            var pips = Math.round((Math.random() * 5) + 1);
            
        // If the randomized pips is 1, 3 or 5, then no pay
           
    
        // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
            if (pips == 2 || pips == 4)
                {
                    win += bet * 1.25;
                }

        // Otherwise the pips 6 returns the inserted bet 150%	
            else if (pips == 6)
                {
                    win += bet * 1.50;
                }
        }

    //Calculate the profit (euros) by subtracting the win counter (euros) from the bets (euros)
            var profit = rounds - win;
    
    // Write the answer to the web page
            var outputText = "";
            outputText = document.getElementById("pOutput").innerHTML = "Bets were altogether " + bet + " euros";
            outputText += document.getElementById("pOutput").innerHTML = "Wins were " + win + " euros";
            outputText += document.getElementById("pOutput").innerHTML = "Profit were " + profit + " euros";

}
