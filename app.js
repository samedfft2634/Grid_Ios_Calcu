// app.js
const allClear = document.querySelector(".number1")
const resultElement = document.querySelector(".result");
const resultPre = document.querySelector(".result-pre")
const numberContainer = document.querySelector(".number-container");

let currentCalculation = "";
let previousCalculation = "";

numberContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("number")) {
		const buttonValue = event.target.textContent;

		if (buttonValue === "=") {
			if (resultElement.value === "") {
				alert("Please enter a number");
			} else {
				currentCalculation = eval(currentCalculation);
                resultPre.value = currentCalculation
                resultElement.value = "";
                
			}
		} else if (buttonValue === "AC") {
			currentCalculation = "";
		} else if (buttonValue === "DEL") {
			currentCalculation = currentCalculation.toString().slice(0,-1);
		} else {
			currentCalculation += buttonValue;
            resultElement.value = currentCalculation;
		}
      
		
	}
});


// enter 

