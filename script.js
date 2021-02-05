function compute()
{
    let p = parseFloat(document.getElementById("principal").value);
    var valid = validation(p);
    if(valid == true) {
        let r = parseFloat(document.getElementById("rate").value);
        var y = parseInt(document.getElementById("years").value);
        var principal = p;
        var rate = r;
        var date = new Date();
        var years = y;
        var final_year = y + date.getFullYear();
        var interest = principal * years * rate / 100;
        document.getElementById("result").innerHTML = "If you deposit " + p + ", " +
            "at an interest rate of " + r +
            "%. You will receive an amount of " + interest +
            ", in the year " + final_year + ".";
    }
    else {
        validation(p);
    }

}

function slider(r) {
    var output = document.getElementById("ran");
    output.innerHTML = r+"%";
}

function validation(pr) {
    if(pr <= 0){
        alert("Enter a valid number");
        maindiv.amount.focus();
        return false;
    }
    else
        return true;
}