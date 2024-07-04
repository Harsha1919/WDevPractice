document.getElementById('calculateButton').onclick = function() {
    calculateAmount();
}

function calculateAmount(){
    var billAmount= parseInt(document.getElementById("billAmount").value);
    var tipPercent= parseInt(document.getElementById("tipPercent").value);
    var splits= parseInt(document.getElementById("splits").value);
    console.log("Calculation Started..!!");
    const tipAmount = billAmount * (tipPercent/100);
    const splitTip = tipAmount/splits;
    const totAmount = tipAmount + billAmount;
    const splitBill = billAmount/splits;
    const splitPay = totAmount / splits;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p>Total Bill : ${billAmount} </p>
    <p>Total Bill with Tip : ${totAmount} </p>
    <p>Total Tip Amount : ${tipAmount} </p>
    <p>Tip per Head : ${splitTip} </p>
    <p>Total Indvidual Pay Amount Excluding Tip: ${splitBill} </p>
    <p>Total Indvidual Pay Amount Including Tip: ${splitPay} </p>
    `
    document.body.appendChild(newDiv);
}
