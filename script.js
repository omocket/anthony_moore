window.onload = calculate();

//calculates total when button is clicked.
function calculate() {
    let cal = document.getElementById("cal");
    cal.onclick = function (){
    getPrice();
   }
}


function round2d(x) {
  return (Math.round(100 * x) / 100);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//calculates price including discount and sales tax.
function getPrice() {
    let price = document.getElementById("price").getElementsByTagName("input");
    let quantity = document.getElementById("quantity").getElementsByTagName("input");
    let dis = document.getElementById("discount").value;
    let t = document.getElementById("tax").value;
    
    let discount = (dis/100).toFixed(3);
    let salesTax = (t/100).toFixed(5);
    
    let totalPrice = 0;
    let discountPrice = 0;
    let finalPrice = 0;
    let taxTotal = 0;
   
    
    for (i = 0; i < price.length && i < quantity.length; i++) {
      let calculate = price[i].value * quantity[i].value;
      let total = parseFloat(calculate);
      if (!isNaN(total)) {
        totalPrice += total;
        discountPrice += total * discount;
        taxTotal += total * salesTax;
        finalPrice = totalPrice - discountPrice;
        grandTotal = numberWithCommas(round2d((finalPrice * salesTax) + finalPrice));
       }
      }
	
    let span = document.getElementById("result");
    span.innerHTML = grandTotal;
}

