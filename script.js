function compute()
{

    if (validate()) {
        var p = parseFloat(document.getElementById("principal").value);
        var r = parseFloat(document.getElementById("rate").value);
        var y = parseInt(document.getElementById("years").value);

        var principal = p;
        var rate = r;
        var date = new Date();
        var years = y;
        var final_year = y + date.getFullYear();

        var interest = principal * years * rate / 100;
        document.getElementById("result").innerHTML = "If you deposit " +"<mark>p</mark>" + ","+"<br>" +
            "at an interest rate of " +"<mark>r</mark>"+ "<mark>%</mark>."+"<br>"+
            "You will receive an amount of " + "<mark>interest</mark>"+","+"<br>"+
            "in the year " + "<mark>final_year</mark>" + ".";

    }
    else {
        document.getElementById("principal").focus();
    }
}

function slider(r) {
    const output = document.getElementById("slider_range");
    output.innerHTML = r+"%";
}

function validate()
 {
     var money = document.getElementById("principal").value;
     if (money <=0 || money==="" || money==null){
        alert("Enter a positive number");
        return false;
    }
    else
        return true;
}
