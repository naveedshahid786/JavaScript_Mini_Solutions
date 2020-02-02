// 07.05 JavasScript code

// (1) Write below a new function called calculateSalary
    function calculateSalary(hours, hourlySalary) {
        var grossSalary = hours * hourlySalary;
        
        return grossSalary;
    }




// (2) Complete the code of the function showGrossSalary
function showGrossSalary() {

    // 1. Get values from the input fields
    var hours = Number(document.getElementById("txtHours").value);
    var hourlySalary = Number(document.getElementById("txtHourlySalary").value);
    
    // 2. Call the calculateSalary function
    var grossSalary = calculateSalary(hours, hourlySalary);

    // 3. Display the answer
    document.getElementById("divOutput").innerHTML = "Gross salary is " + grossSalary.toFixed(2) + " euros."
}