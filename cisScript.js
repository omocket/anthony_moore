//Initializes a button tag.
let btn = document.getElementById("btn");

//A button object that initializes the validate function once the button is clicked.
btn.addEventListener("click", validate);

//A function that prints the total results on the page.
function validate(){

    
    //Creates a variable that initializes the text value of an input tag.
    let textVal = document.getElementById("tVal").value;
    
    //Creates a variable that initializes the number value of an input tag.
    let numVal = document.getElementById("nVal").value;
    
    //Creates a variable that prints some text.
    let textResult = document.getElementById("textResult");
    
    //Creates a variable that prints the link.
    let linkResult = document.getElementById("result");
    
    //Creates an array of link tags
    let link = ["Home","About","Contact"];
    
 
    //Checks if a number is entered.
    if (numVal === "") {
        
        alert("Please enter a number.");
        textResult.innerHTML = "";
        linkResult.innerHTML = "";
        
    }
    
    //Checks if the number selected is less than 0 and contains a number.
    else if (numVal <= 0 && numVal !== "") {
        
        alert("Input out of range. The input must be greater than 0.");
        textResult.innerHTML = "";
        linkResult.innerHTML = "";
    
    
    }
    //Checks if some text is entered.
    else if (textVal === "") {
        
        alert("Please enter text.");
        textResult.innerHTML = "";
        linkResult.innerHTML = "";
        
    } 
    
    //Prints the Home link when a number is between 1 and 5 and to ensure some text was entered as well.
    else if (numVal > 0 && numVal <= 5 && textVal !== "") {
        
        linkResult.innerHTML = link[0].link("home.html");
        textResult.innerHTML = textVal;
        console.log(link[0]); 
    }
    
    //Prints the About link when a number is between 6 and 10 and to ensure some text was entered as well.
    else if (numVal <= 10 && textVal !== "" && numVal !== "") {
       
        linkResult.innerHTML = link[1].link("about.html");
        textResult.innerHTML = textVal;
        console.log(link[1]);  
        
    }
    
    //Prints the Contact link when a number is between 11 and 20 and to ensure some text was entered as well.
    else if (numVal <= 20 && textVal !=="" && numVal!=="") {
        
        linkResult.innerHTML = link[2].link("contact.html");
        textResult.innerHTML = textVal;
        console.log(link[2]);
        
    }
    
    //Checks if a number is greater than 20.
    else {
        
        alert("Input out of range. The input must be less than or equal to 20.");
        textResult.innerHTML = "";
        linkResult.innerHTML = "";
    }
    
}
