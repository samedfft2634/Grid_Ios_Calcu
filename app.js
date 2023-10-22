// app.js
document.addEventListener("DOMContentLoaded", function () {
	resultElement.focus();
});

const allClear = document.querySelector(".number1");
const resultElement = document.querySelector(".result");
const resultPre = document.querySelector(".result-pre");
const numberContainer = document.querySelector(".number-container");

let currentCalculation = "";
let preCal = "";
let dot = 1

numberContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("number")) {
		const buttonValue = event.target.textContent;

		if (buttonValue === "=") {
			const lastChar = currentCalculation.charAt(
				currentCalculation.length - 1
			);
			if (resultElement.value === "") {
				alert("Please enter a number");
			} else if (isOperator(lastChar)) {
				currentCalculation = currentCalculation.slice(0, -1);
				resultElement.value = currentCalculation;
			} else {
				currentCalculation = eval(currentCalculation);
				resultPre.value = currentCalculation;
				resultElement.value = "";
				currentCalculation = "";
				// console.log(currentCalculation,typeof currentCalculation,resultPre.value, typeof resultPre, resultPre) // if you do not reset current , in 40.line will error cuz currentCalculation will be number.
			}
		} else if (buttonValue === "AC") {
			currentCalculation = "";
			resultPre.value = "";
			resultElement.value = "";
		} else if (buttonValue === "DEL") {
			currentCalculation = currentCalculation.toString().slice(0, -1);
			resultElement.value = currentCalculation;
		} else {
			const lastChar = currentCalculation.charAt(
				currentCalculation.length - 1
			);
			if (!isOperator(lastChar) && buttonValue === "%") {
				// If the last character added is not an operator and this time the "%" button is pressed
				currentCalculation = (
					parseFloat(currentCalculation) / 100
				).toString();
				resultPre.value = currentCalculation;
				resultElement.value = "";
			} else if (!isOperator(lastChar) && isOperator(buttonValue)) {
				//  If the last character added is not an operator and an operator is added this time
				if (currentCalculation.includes(".") && buttonValue === ".") {
					if(dot === 1 && buttonValue === "."){
					resultElement.value = currentCalculation;
					} 
				} else {
					currentCalculation += buttonValue;
					resultElement.value = currentCalculation;
				}
			} else if (isOperator(lastChar) && isOperator(buttonValue)) {
				// If the last character added is an operator and this time an operator is added
				if(buttonValue !== "."){
					currentCalculation =currentCalculation.slice(0, -1) + buttonValue;
					resultElement.value = currentCalculation;
				}
				
			} else {
				currentCalculation += buttonValue;
				resultElement.value = currentCalculation;
			}
		}
	}
});

function isOperator(char) {
	// Checks if the given character is an operator.
	return "+-*/.%".includes(char);
}

resultElement.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		if (resultElement.value === "") {
			alert("Please enter a number");
		} else {
			try {
				currentCalculation = eval(resultElement.value);
				resultPre.value = currentCalculation;
				resultElement.value = "";
			} catch (error) {
				alert("Invalid expression");
				resultElement.value = "";
			}
		}
	}
	// resultElement.value = "" // every time I press a button while this is here, the previous one disappears.
});


// When the page opens and click on the image, the ios calculator will appear
const resim = document.querySelector(".img1");
resim.addEventListener("click", function () {
	resim.style.display = "none";
});


