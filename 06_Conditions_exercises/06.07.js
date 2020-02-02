// 06.07 JavasScript code

function showStudyGrant() {
    // TODO
    var age = Number(document.getElementById("txtAge").value;)
    var withParents = Number(document.getElementById("txtWithParents").value);
    var studyGrant;
    
    if (age >= 20 && withParents == "n")
        {
            studyGrant = "The study grant is 335.20 euros";
        }
    else if (age >= 20 && withParents == "y")
        {
            studyGrant = "The study grant is 136.70 euros";
        }
    else
        {
            studyGrant = "Ask Kela"
        }
    document.getElementById("divAnswer").innerHTML = studyGrant;
    
}
