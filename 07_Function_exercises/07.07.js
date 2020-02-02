// 07.07 JavasScript code

// Complete the code of the function processName
function processName() {

    // 1. Read value of name from the input field
    var name = document.getElementById("txtNname").value;

    // 2. Show it with "ALL CAPS" using toUpperCase()
    document.getElementById("divUpperCase").innerHTML = "With upper case letters: " + name.toUpperCase();

    // 3. Show it with  "all small letters" using toLowerCase()
    document.getElementById("divLowerCase").innerHTML = "With lower case letters: " + name.toLowerCase();

    // 4. Tell how many characters are there (length, includes also all spaces) 
    document.getElementById("divLength").innerHTML = "Character count: " + name.length;

    // 5. Tell, whether the input string contains the word 'muumi'
    var outputText;
    if (name.indexOf("mummi")) {
        outputText = "Does not ontains the text mummi"
        
    }
    else {
        outputText = "Contain text mummi"
    }
    document.getElementById("divContains").innerHTML = outputText;

    // 6. Tell the first character using charAt()
    document.getElementById("divFirstCharacter").innerHTML = "First character: " + name.charAt();

    // 7. Tell which ones are the first three characters using substr().
    document.getElementById("divManyCharacters").innerHTML = "First three character: " + name.substr(0,3);
}