// 06.09 JavasScript code

function tellInfractionFine() {

    var speed = Number(document.getElementById("txtDrivingSpeed").value);
    var limit = Number(document.getElementById("txtSpeedLimit").value);
    var exceedLimit = speed - limit;
    var fine;
    
    if(speed >= 10 && speed <= 60)
        {
            if(exceedLimit > 0 && exceedLimit <= 15)
                {
                    document.getElementById("divAnswer").innerHTML = "Infraction fine is 85 euros";
                }
            else if(exceedLimit > 15 && exceedLimit <= 20)
                {
                    document.getElementById("divAnswer").innerHTML = "Infraction fine is 115 euros"
                }
        }
    else if (speed >= 70 && speed <= 120)
        {
            if (exceedLimit >= 0 && exceedLimit <= 15)
                {
                    document.getElementById("divAnswer").innerHTML = "Infraction fine is 70 euros"
                }
            else if (exceedLimit > 15 && exceedLimit <= 20)
                {
                    document.getElementById("divAnswer").innerHTML = "Infraction fine is 100 euros"
                }
        }
    else if (speed === limit)
        {
            document.getElementById("divAnswer").innerHTML = "No speeding, no fine."
        }
    else (exceedLimit <= 20)
    {
        document.getElementById("divAnswer").innerHTML = "Income based unit fine"
    }
    
}