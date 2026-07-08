function calculate()
{
    var price = Number(document.getElementById("price").value);
    var quantity = Number(document.getElementById("quantity").value);

    if(quantity < 0)
    {
        document.getElementById("error").innerHTML = "Error";
        document.getElementById("payable").value = "";
        document.getElementById("btn").style.display = "none";
        return;
    }
    else
    {
        document.getElementById("error").innerHTML = "";
    }

    var total = price * quantity;
    document.getElementById("payable").value = total;

    if(price > 0 && quantity >= 0)
    {
        document.getElementById("btn").style.display = "inline";
    }
    else
    {
        document.getElementById("btn").style.display = "none";
    }
}