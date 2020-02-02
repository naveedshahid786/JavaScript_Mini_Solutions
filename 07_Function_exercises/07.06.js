// 07.06 JavasScript code

// Define a function (1.) 
    function kelaReimbursment (length) {
        var length = parseInt(document.getElementById("txtLength").value);
        var kelaPays;
        if (length<= 10)
            {
                kelaPays = 8
            }
        else if (length<= 20)
            {
                kelaPays = 11
            }
        else if (length<= 30)
            {
                kelaPays = 13.50
            }
        else if (length<= 45)
            {
                kelaPays = 16.50
            }
        else if (length<= 60)
            {
                kelaPays = 21
            }
        return Number(kelaPays);
    }

// Define a function (2.) 
    function customerPays (doctorFee, kelaReimburs) {
        var doctorFees = parseInt(doctorFee);
        var kelaReimbursment = parseFloat(kelaReimburs);
        
        return doctorFees - kelaReimbursment + 15.90;
    }

// Define a function (3.) 


// Complete the code of the function calculate.
function calculate() {

    // 1. Get values from the input fields
    var length = Number(document.getElementById("txtLength").value);
    var docFee = Number(document.getElementById("txtDoctorsFee").value);

    // 2. Call the function (1.) which calculates Kela reimbursement 
    var kelaImburs = kelaReimbursment(length);

    // 3. Call the function (2.) which calculates amount left for the customer to pay
    var custimerPay = customerPays(doctorFee, kelaReimburs);

    // 4. Display the answer 
    document.getElementById("divOutput").innerHTML = "Doctor's Fee is "+customerPays(doctorFee, kelaReimburs)+"<br />"+ "Kela reimbursement is " kelaReimbursment(length)+ "<br />" + "Office Fee is 15.90 "+"<br />"+ "Customer needs to pay "+ CustomerHasToPay(fee);
}