// app.js
document.addEventListener("DOMContentLoaded", function () {
	resultElement.focus();
});

const allClear = document.querySelector(".number1");
const resultElement = document.querySelector(".result");
const resultPre = document.querySelector(".result-pre");
const numberContainer = document.querySelector(".number-container");

let currentCalculation = "";
let previousCalculation = "";

numberContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("number")) {
		const buttonValue = event.target.textContent;
		
		if (buttonValue === "=") {
			const lastChar = currentCalculation.charAt(currentCalculation.length - 1);
			if (resultElement.value === "") {
				alert("Please enter a number");
			} else if(isOperator(lastChar)){
				currentCalculation = currentCalculation.slice(0, -1)
				resultElement.value = currentCalculation;
			}  else {
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
			const lastChar = currentCalculation.charAt(currentCalculation.length - 1);
			if (!isOperator(lastChar) && buttonValue === "%") {
				// Son eklenen karakter operatör değilse ve bu sefer "%" butonuna basıldıysa
				currentCalculation = (parseFloat(currentCalculation) / 100).toString();
				resultPre.value = currentCalculation;
				resultElement.value = "";
			} else if (!isOperator(lastChar) && isOperator(buttonValue)) {
				// Son eklenen karakter operatör değilse ve bu sefer bir operatör ekleniyorsa
				currentCalculation += buttonValue;
				resultElement.value = currentCalculation;
			} else if (isOperator(lastChar) && isOperator(buttonValue)) {
				// Son eklenen karakter operatör ise ve bu sefer de operatör ekleniyorsa
				currentCalculation = currentCalculation.slice(0, -1) + buttonValue;
				resultElement.value = currentCalculation;
			} else {		
				currentCalculation += buttonValue;
				resultElement.value = currentCalculation;
			}	
		}
	}
});

function isOperator(char) {
	// Verilen karakter bir operatör mü kontrol eder.
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
	// resultElement.value = "" // bu buradayken bastigim her tustan sonra bir onceki kayboluyor
});

const resim = document.querySelector(".img1");
resim.addEventListener("click", function () {
	resim.style.display = "none";
});

resim.style.display = "none";

// else if (currentCalculation.includes(".")){

// }