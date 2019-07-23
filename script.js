var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var correctSquare = Number(Math.floor(Math.random() * (squares.length - 1) + 1));
var correctColor = "";
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function () {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	hideSquares();
	fillSquares();
});

hardBtn.addEventListener("click", function () {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	showSquares();
	fillSquares();
});

//start the game
fillSquares();

resetButton.addEventListener("click", function () {
	fillSquares();
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
});

function fillSquares() {
	for (var i = 0; i < numSquares; i++) {
		squares[i].style.backgroundColor = getRandomColor();
	}

	//get index of random square as the correct square
	correctSquare = Number(Math.floor(Math.random() * (numSquares)));
	
	//get that square's color
	correctColor = squares[correctSquare].style.backgroundColor;
	//set it as the correct color
	colorDisplay.innerHTML = correctColor;
}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < numSquares; i++) {
		color += letters[Math.floor(Math.random() * 16)]; //times 16 as we are using hexadecimal 
	}
	return color;
}

//logic for determining whether a guess is correct or incorrect
for (var i = 0; i < numSquares; i++) {
	squares[i].addEventListener("click", function () {
	var clickedColor = this.style.backgroundColor;

	if (clickedColor === correctColor) {		//correct guess
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else {									//incorrect guess
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}

//changes colors of all squares to correct color on correct guess
function changeColors(color) {
	for (var i = 0; i < numSquares; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function hideSquares() {
	for (var i = 3; i < squares.length; i++){
		squares[i].classList.add("hidden");
	}
}

function showSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.remove("hidden");
	}
}

