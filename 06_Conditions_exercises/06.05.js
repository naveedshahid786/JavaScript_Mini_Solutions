// 06.05 JavasScript code

function calculateBMI() {
    var weight = Number(document.getElementById("txtWeight").value);
    var height = Number(document.getElementById("txtHeight").value);
   var bmi = weight / (height/100.0 * height/100.0);
    var outputText;
    
    if (bmi <= 18.4)
        {
            outputText = "Weight less than normal";
        }
    else if (bmi <= 24.9)
        {
            outputText = "Normal weight";
        }
    else
        {
            outputText = "Overweight";
        }
    document.getElementById("divAnswer").innerHTML = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (" + outputText + ")." ;
    

}
