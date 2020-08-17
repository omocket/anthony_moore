window.load = getCalculation();

function getCalculation() {
	
	//Calculates total cost for year 1 once button is clicked.
	let cal = document.getElementById("cal");
	cal.onclick = function() {

		calculateCosts();
	}
	
	//Get basket price for year 1 and year 2 once button is clicked.
	let basket = document.getElementById("basket");
	basket.onclick = function() {

		getBasketPrice();
	}
	
	//Calculates total cost for year 2 once button is clicked.
	let cal1 = document.getElementById("cal1");
	cal1.onclick = function() {
		
		calculateCosts1();
	}
	
	//Calculates the CPI for year 1 once button is clicked.
	let cpi1 = document.getElementById("cpi1");
	cpi1.onclick = function() {
		
		calculateCPI();
	}
	
	//Calculates the CPI for year 2 once button is clicked.
	let cpi2 = document.getElementById("cpi2");
	cpi2.onclick = function() {
		
		calculateCPI2();
	}
	
	//Calculates inflation once button is clicked.
	let inflationRate = document.getElementById("inflationRate");
	inflationRate.onclick = function() {
		
		calculateInflation();
		
	}
}

//Calculates the total cost for year 1 by multiplying the quantity by the price.
function calculateCosts() {

	let q1 = document.getElementById("q1").value;
	let q2 = document.getElementById("q2").value;
	let q3 = document.getElementById("q3").value;
	let q4 = document.getElementById("q4").value;
	let q5 = document.getElementById("q5").value;
	let q6 = document.getElementById("q6").value;
	let q7 = document.getElementById("q7").value;
	let q8 = document.getElementById("q8").value;
	let q9 = document.getElementById("q9").value;
	let q10 = document.getElementById("q10").value;

	let m1 = document.getElementById("m1").value;
	let m2 = document.getElementById("m2").value;
	let m3 = document.getElementById("m3").value;
	let m4 = document.getElementById("m4").value;
	let m5 = document.getElementById("m5").value;
	let m6 = document.getElementById("m6").value;
	let m7 = document.getElementById("m7").value;
	let m8 = document.getElementById("m8").value;
	let m9 = document.getElementById("m9").value;
	let m10 = document.getElementById("m10").value;

	let d1 = document.getElementById("d1");
	let d2 = document.getElementById("d2");
	let d3 = document.getElementById("d3");
	let d4 = document.getElementById("d4");
	let d5 = document.getElementById("d5");
	let d6 = document.getElementById("d6");
	let d7 = document.getElementById("d7");
	let d8 = document.getElementById("d8");
	let d9 = document.getElementById("d9");
	let d10 = document.getElementById("d10");

	let cost1 = parseFloat(q1) * parseFloat(m1);
	let cost2 = parseFloat(q2) * parseFloat(m2);
	let cost3 = parseFloat(q3) * parseFloat(m3);
	let cost4 = parseFloat(q4) * parseFloat(m4);
	let cost5 = parseFloat(q5) * parseFloat(m5);
	let cost6 = parseFloat(q6) * parseFloat(m6);
	let cost7 = parseFloat(q7) * parseFloat(m7);
	let cost8 = parseFloat(q8) * parseFloat(m8);
	let cost9 = parseFloat(q9) * parseFloat(m9);
    let cost10 = parseFloat(q10) * parseFloat(m10);

	//Prints the result in the cost column for year 1.
	if (!isNaN(cost1)){
		d1.innerHTML = "$"+ cost1.toFixed(2);
	}
	if (!isNaN(cost2)){
		d2.innerHTML = "$"+ cost2.toFixed(2);
	}
	if (!isNaN(cost3)){
		d3.innerHTML = "$"+ cost3.toFixed(2);
	}
	if (!isNaN(cost4)){
		d4.innerHTML = "$"+ cost4.toFixed(2);
	}
	if (!isNaN(cost5)){
		d5.innerHTML = "$"+ cost5.toFixed(2);
	}
	if (!isNaN(cost6)){
		d6.innerHTML = "$"+ cost6.toFixed(2);
	}
	if (!isNaN(cost7)){
		d7.innerHTML = "$"+ cost7.toFixed(2);
	}
	if (!isNaN(cost8)){
		d8.innerHTML = "$"+ cost8.toFixed(2);
	}
	if (!isNaN(cost9)){
		d9.innerHTML = "$"+ cost9.toFixed(2);
	}
	if (!isNaN(cost10)){
		d10.innerHTML = "$"+ cost10.toFixed(2);
	}
	
}

//Calculates the total cost for year 2 by multiplying the quantity from year 1 by the adjusted price for year 2.
function calculateCosts1() {
	
	let q1 = document.getElementById("q1").value;
	let q2 = document.getElementById("q2").value;
	let q3 = document.getElementById("q3").value;
	let q4 = document.getElementById("q4").value;
	let q5 = document.getElementById("q5").value;
	let q6 = document.getElementById("q6").value;
	let q7 = document.getElementById("q7").value;
	let q8 = document.getElementById("q8").value;
	let q9 = document.getElementById("q9").value;
	let q10 = document.getElementById("q10").value;
	
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	let n3 = document.getElementById("n3").value;
	let n4 = document.getElementById("n4").value;
	let n5 = document.getElementById("n5").value;
	let n6 = document.getElementById("n6").value;
	let n7 = document.getElementById("n7").value;
	let n8 = document.getElementById("n8").value;
	let n9 = document.getElementById("n9").value;
	let n10 = document.getElementById("n10").value;

	let e1 = document.getElementById("e1");
	let e2 = document.getElementById("e2");
	let e3 = document.getElementById("e3");
	let e4 = document.getElementById("e4");
	let e5 = document.getElementById("e5");
	let e6 = document.getElementById("e6");
	let e7 = document.getElementById("e7");
	let e8 = document.getElementById("e8");
	let e9 = document.getElementById("e9");
	let e10 = document.getElementById("e10");

	let money1 = parseFloat(q1) * parseFloat(n1);
	let money2 = parseFloat(q2) * parseFloat(n2);
	let money3 = parseFloat(q3) * parseFloat(n3);
	let money4 = parseFloat(q4) * parseFloat(n4);
	let money5 = parseFloat(q5) * parseFloat(n5);
	let money6 = parseFloat(q6) * parseFloat(n6);
	let money7 = parseFloat(q7) * parseFloat(n7);
	let money8 = parseFloat(q8) * parseFloat(n8);
	let money9 = parseFloat(q9) * parseFloat(n9);
	let money10 = parseFloat(q10) * parseFloat(n10);

	//Prints the result in the cost column for year 2.
	if (!isNaN(money1)){
		e1.innerHTML = "$"+ money1.toFixed(2);
	}
	if (!isNaN(money2)){
		e2.innerHTML = "$"+ money2.toFixed(2);
	}
	if (!isNaN(money3)){
		e3.innerHTML = "$"+ money3.toFixed(2);
	}
	if (!isNaN(money4)){
		e4.innerHTML = "$"+ money4.toFixed(2);
	}
	if (!isNaN(money5)){
		e5.innerHTML = "$"+ money5.toFixed(2);
	}
	if (!isNaN(money6)){
		e6.innerHTML = "$"+ money6.toFixed(2);
	}
	if (!isNaN(money7)){
		e7.innerHTML = "$"+ money7.toFixed(2);
	}
	if (!isNaN(money8)){
		e8.innerHTML = "$"+ money8.toFixed(2);
	}
	if (!isNaN(money9)){
		e9.innerHTML = "$"+ money9.toFixed(2);
	}
	if (!isNaN(money10)){
		e10.innerHTML = "$"+ money10.toFixed(2);
	}

}

//Calculates basket price.
function getBasketPrice() {
	
	/*************Begin calculation for year 1*************/
	let quantity = document.getElementById("quantity").getElementsByTagName("input");
	let price = document.getElementById("price").getElementsByTagName("input");
	let basketPrice = 0;
	
	//Calculates the basket price for year 1.
	for (i = 0; i < price.length && i < quantity.length; i++) {
		let total = price[i].value * quantity[i].value;
		let totalCost = parseFloat(total);
		if (!isNaN(totalCost)) {
			basketPrice += totalCost;
	}
}
	//Prints the result.
	let result = document.getElementById("result");
	result.innerHTML = "$"+ basketPrice.toFixed(2);
	/*************End calculation for year 1*************/
	
	/*************Begin calculation for year 2*************/
	let prices = document.getElementById("prices").getElementsByTagName("input");
	let basketPrice2 = 0;
	
	//Calculates the basket price for year 2.
	for (i = 0; i < prices.length && i < quantity.length; i++) {
		let sum = prices[i].value * quantity[i].value;
		let allSum = parseFloat(sum);
		if (!isNaN(allSum)) {
			basketPrice2 += allSum;
		}
	}
	
	//Prints the result.
	let result1 = document.getElementById("result1");
	result1.innerHTML = "$"+ basketPrice2.toFixed(2);
	/*************End calculation for year 2*************/
}

//Calculates the CPI for year 1.
function calculateCPI() {
	let marketPrice1 = document.getElementById("enter").value;
	let getMarketPrice1 = (parseFloat(marketPrice1) / parseFloat(marketPrice1)) * 100;
	let cpiResult = document.getElementById("cpi1Result");
	
	if (!isNaN(getMarketPrice1)) {
		cpiResult.innerHTML = getMarketPrice1.toFixed(2);
	}
	
}

//Calculates the CPI for year 2.
function calculateCPI2() {
	
	//Formula to calculate the CPI for year 2.
	let marketPrice1 = document.getElementById("enter").value;
	let marketPrice2 = document.getElementById("enter1").value;
	let getMarketPrice2 = (parseFloat(marketPrice2) / parseFloat(marketPrice1)) * 100;
	let cpiResult2 = document.getElementById("cpi2Result");
	
	if (!isNaN(getMarketPrice2)) {
		cpiResult2.innerHTML = getMarketPrice2.toFixed(2);
	}
}

//Calculates the inflation rate.
function calculateInflation() {
	
	//Calculates the CPI for year 1.
	let marketPrice1 = document.getElementById("enter").value;
	let getMarketPrice1 = (parseFloat(marketPrice1) / parseFloat(marketPrice1)) * 100;
	
	//Calculates the CPI for year 2.
	let marketPrice2 = document.getElementById("enter1").value;
	let getMarketPrice2 = (parseFloat(marketPrice2) / parseFloat(marketPrice1)) * 100;
	let inflationResult = document.getElementById("inflationResult");
	
	//Formula for the inflation rate.
	let inflation = (((getMarketPrice2) - (getMarketPrice1)) / (getMarketPrice1)) * 100;
	
	if (!isNaN(inflation)) {
		inflationResult.innerHTML = inflation.toFixed(2) +"%";
	}
	
}

//Created by Anthonhy MOore

