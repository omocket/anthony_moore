window.load = getSchedule();

function getSchedule() {
	
	let confirm = document.getElementById("confirmation");

	let b1 = document.getElementById("b1");
	b1.onclick = function() {
		
		let name = document.getElementById("name").value;
		let c1 = document.getElementById("c1");
		let p = document.createElement("P");
		
		b1.disabled = true;
		c1.disabled = true;
		alert("You reserved your appointment for 8:30 a.m.");
		
		
		p.innerHTML = name + " has set an appointment for 8:30 a.m.";
		confirm.appendChild(p);
	}
	
	let b2 = document.getElementById("b2");
	b2.onclick = function() {
		
		let c2 = document.getElementById("c2");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b2.disabled = true;
		c2.disabled = true;
		alert("You reserved your appointment for 9:15 a.m.");
		
		p.innerHTML = name + " has set an appointment for 9:15 a.m.";
		confirm.appendChild(p);
	}
    let b3 = document.getElementById("b3");
	b3.onclick = function() {
		
		let c3 = document.getElementById("c3");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");

		b3.disabled = true;
		c3.disabled = true;
		alert("You reserved your appointment for 9:45 a.m.");
		
		p.innerHTML = name + " has set an appointment for 9:45 a.m.";
		confirm.appendChild(p);
	}
	let b4 = document.getElementById("b4");
	b4.onclick = function() {
		
		let c4 = document.getElementById("c4");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b4.disabled = true;
		c4.disabled = true;
		alert("You reserved your appointment for 10:15 a.m.");
		
		p.innerHTML = name + " has set an appointment for 10:15 a.m.";
		confirm.appendChild(p);
	}
	let b5 = document.getElementById("b5");
	b5.onclick = function() {
		
		let c5 = document.getElementById("c5");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b5.disabled = true;
		c5.disabled = true;
		alert("You reserved your appointment for 10:45 a.m.");
		
		p.innerHTML = name + " has set an appointment for 10:45 a.m.";
		confirm.appendChild(p);
	}
	let b6 = document.getElementById("b6");
	b6.onclick = function() {
		
		let c6 = document.getElementById("c6");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b6.disabled = true;
		c6.disabled = true;
		alert("You reserved your appointment for 11:30 a.m.");
		
		p.innerHTML = name + " has set an appointment for 11:30 a.m.";
		confirm.appendChild(p);
	}
	let b7 = document.getElementById("b7");
	b7.onclick = function() {
		
		let c7 = document.getElementById("c7");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b7.disabled = true;
		c7.disabled = true;
		alert("You reserved your appointment for 1:00 p.m.");
		
		p.innerHTML = name + " has set an appointment for 1:00 p.m.";
		confirm.appendChild(p);
	}
	let b8 = document.getElementById("b8");
	b8.onclick = function() {
		
		let c8 = document.getElementById("c8");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b8.disabled = true;
		c8.disabled = true;
		alert("You reserved your appointment for 1:45 p.m.");
		
		p.innerHTML = name + " has set an appointment for 1:45 p.m.";
		confirm.appendChild(p);
	}
	let b9 = document.getElementById("b9");
	b9.onclick = function() {
		
		let c9 = document.getElementById("c9");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b9.disabled = true;
		c9.disabled = true;
		alert("You reserved your appointment for 2:30 p.m.");
		
		p.innerHTML = name + " has set an appointment for 2:30 p.m.";
		confirm.appendChild(p);
	}
	let b10 = document.getElementById("b10");
	b10.onclick = function() {
		
		let c10 = document.getElementById("c10");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b10.disabled = true;
		c10.disabled = true;
		alert("You reserved your appointment for 3:00 p.m.");
		
		p.innerHTML = name + " has set an appointment for 3:00 p.m.";
		confirm.appendChild(p);
	}
	let b11 = document.getElementById("b11");
	b11.onclick = function() {
		
		let c11 = document.getElementById("c11");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b11.disabled = true;
		c11.disabled = true;
		alert("You reserved your appointment for 3:45 p.m.");
		
		p.innerHTML = name + " has set an appointment for 3:45 p.m.";
		confirm.appendChild(p);
	}
	let b12 = document.getElementById("b12");
	b12.onclick = function() {
		
		let c12 = document.getElementById("c12");
		let name = document.getElementById("name").value;
		let p = document.createElement("P");
		
		b12.disabled = true;
		c12.disabled = true;
		alert("You reserved your appointment for 4:30 p.m.");
		
		p.innerHTML = name + " has set an appointment for 4:30 p.m.";
		confirm.appendChild(p);
	}
	let reset = document.getElementById("reset");
	reset.onclick = function() {
		
		let b1 = document.getElementById("b1");
		let b2 = document.getElementById("b2");
		let b3 = document.getElementById("b3");
		let b4 = document.getElementById("b4");
		let b5 = document.getElementById("b5");
		let b6 = document.getElementById("b6");
		let b7 = document.getElementById("b7");
		let b8 = document.getElementById("b8");
		let b9 = document.getElementById("b9");
		let b10 = document.getElementById("b10");
		let b11 = document.getElementById("b11");
		let b12 = document.getElementById("b12");
		
		let c1 = document.getElementById("c1");
		let c2 = document.getElementById("c2");
		let c3 = document.getElementById("c3");
		let c4 = document.getElementById("c4");
		let c5 = document.getElementById("c5");
		let c6 = document.getElementById("c6");
		let c7 = document.getElementById("c7");
		let c8 = document.getElementById("c8");
		let c9 = document.getElementById("c9");
		let c10 = document.getElementById("c10");
		let c11 = document.getElementById("c11");
		let c12 = document.getElementById("c12");
		
		
		b1.disabled = false;
		b2.disabled = false;
		b3.disabled = false;
		b4.disabled = false;
		b5.disabled = false;
		b6.disabled = false;
		b7.disabled = false;
		b8.disabled = false;
		b9.disabled = false;
		b9.disabled = false;
		b10.disabled = false;
		b11.disabled = false;
		b12.disabled = false;
		
		c1.disabled = false;
		c2.disabled = false;
		c3.disabled = false;
		c4.disabled = false;
		c5.disabled = false;
		c6.disabled = false;
		c7.disabled = false;
		c8.disabled = false;
		c9.disabled = false;
		c10.disabled = false;
		c11.disabled = false;
		c12.disabled = false;
		
		confirm.innerHTML = "";
	
	}
}