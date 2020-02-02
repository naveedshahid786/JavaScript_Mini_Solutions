// 06.02 JavasScript code

function checkAge() {
		
    // Assign the age input field value into a variable
    var age = Number(document.getElementById("txtAge").value);
    
    // if the age is smaller than 18
        // assign text "Adolescents are not allowed to play." to a variable
    // otherwise 
        // assign text "Old enough to play." to a variable  
    if (age < 18)
        {
            outputText = "Adolescents are not allowed to play";
        }
    else
        {
            outputText = "Old enough to play";
        }
    // Write the answer to the answer div, as the content
		document.getElementById("divAnswer").innerHTML = outputText;
}