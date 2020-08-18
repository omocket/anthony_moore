window.load = finalBudgetAmount();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    
function finalBudgetAmount() {
    let valAmount = document.getElementById("valAmount");
    valAmount.onclick = function() {
    
    let validate = 0;
      
      let budget = document.getElementById("budget").getElementsByTagName("input");
      
      for(i = 0; i < budget.length; i++) {
          let amount = budget[i].value;
          let money = parseFloat(amount);
          if (!isNaN(money)) {
              validate += money;
          
          }
      }
      let bAmount = document.getElementById("bAmount");
      bAmount.innerHTML = numberWithCommas(validate.toFixed(2));
    }
     
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
   
   let totalAmount = document.getElementById("totalAmount");
   totalAmount.onclick = function() {
       
       let startingBudget = 0;
	   let totalCost = 0;
    
       
       let budget = document.getElementById("budget").getElementsByTagName("input");
       let costs = document.getElementById("costs").getElementsByTagName("input");
       
	   for (i = 0; i < budget.length && i < costs.length; i++) {
	   	    let getCost = costs[i].value;
		    let amount = budget[i].value;
		    let addCost = parseFloat(getCost);
		    let money = parseFloat(amount);
		    if (!isNaN(money) && !isNaN(addCost)) {
				startingBudget += money;
				totalCost += addCost;
				finalAmount = startingBudget - totalCost;
			}
	   }
     
       let bAmount = document.getElementById("bAmount");
       bAmount.innerHTML = numberWithCommas(finalAmount.toFixed(2));
   }
}