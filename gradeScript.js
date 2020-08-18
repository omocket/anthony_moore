window.load = calculate();


//Function that converts the letter strings into numbers
function calculateGrades(letter) {
  
  if (letter === 'A') {
    return 4;
  }
  else if (letter === 'B') {
    return 3;
  }
  else if (letter === 'C') {
    return 2;
  }
  else if (letter === 'D') {
    return 1;
  }
  else if (letter === 'F') {
    return 0;
  }

}

//Calculates GPA
function calculate() {
  let cal = document.getElementById("cal");
  cal.onclick = function() {
  
   let g1 = 0;
   let c1 = 0;
   let finalGrades = 0;
   
	let x = document.getElementById("grades").getElementsByTagName("input");
	let y = document.getElementById("credits").getElementsByTagName("input");



	//Calculates the grade and credits  
   for (i = 0; i < x.length && i < y.length; i++) {
     let allGrds = x[i].value;
	 let allCrds = y[i].value;
	 let calCrds = parseInt(allCrds);
     let calGrds = calculateGrades(allGrds);
     if (!isNaN(calGrds) && !isNaN(calCrds)) {
		
		g1 += calGrds * calCrds;
		c1 += calCrds;
		finalGrades = g1 / c1;

   }

 }

   let span = document.getElementById("result");
   span.innerHTML = finalGrades.toFixed(2);
  }
}






 