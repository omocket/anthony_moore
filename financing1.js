window.load = calculatePrice();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculatePrice() {
	 let cal = document.getElementById("cal");
     cal.onclick = function () {
     
     let total = 0;
    
     
     let price = document.getElementById("price").getElementsByTagName("input");
     
     for (i = 0; i < price.length; i++) {
         let getPrices = price[i].value;
         let addPrices = parseFloat(getPrices);
         if (!isNaN(addPrices)) {
             total += addPrices;
            
         }
     }
     
     let result = document.getElementById("result");
     result.innerHTML = numberWithCommas(total.toFixed(2));
   }
}