var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let test = window.getComputedStyle(body, null).getPropertyValue("background");
var randomButton = document.querySelector(".random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	setButtonGradient();
}

function setButtonGradient() {
	randomButton.style.background = 
	"linear-gradient(to left, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function rgbToHex(r, g, b) {
	return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function setColorInput() {
	var location = test.search(" rgb");												// Find the first rgb value
	var newLocation = test.search("re"); 											// Find the second rgb value
	var newString = test.substring(location, newLocation - 2); 						// Get the substring between the two rgb values
	newString = newString.replace(/rgb/g, "|").split("|"); 							// Replace rgb with | and split the string
	newString = newString.map(function(item) {
		item = item.replace("(", "").replace(")", "").split(", ");                  // Remove the brackets and split the string										   
		return rgbToHex(parseInt(item[0]), parseInt(item[1]), parseInt(item[2]));   // Convert the rgb values to hex
	});
	color1.value = newString[1];													// Set the color1 input value							
	color2.value = newString[2];													// Set the color2 input value	
	setGradient();																	// Set the gradient			
}


function randomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

console.log(randomColor());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandGradient);

randomButton.addEventListener("hover", setButtonGradient);

setColorInput();