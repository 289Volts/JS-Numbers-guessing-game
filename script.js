// number guessing game that increment range after user gets answer right

// Get username
let userName = prompt("Welcome to the number guessing game!. \n Enter your username");
// Default range
let range = 2;

// Get guess from user input
let stage = 1;
let guess = prompt(`Stage ${stage} \n \n Guess a number between 1 and ${range}`);

// Generate answer randomly
let answer = Math.floor(Math.random() * range) + 1;
// Function to run the range and increment it if the guess is correct and to restart the game if the guess is wrong
function addRange(range) {
	// Generate answer randomly
	let answer = Math.floor(Math.random() * range) + 1;
	let point = 1;

	for (let i = 0; i < 10; i++) {
		if (guess == answer) {
			alert(`You got it right! Good job! \n \n You have ${point} point(s)`);
			range++;
			point++;
			stage++;
			answer = Math.floor(Math.random() * range) + 1;
			guess = prompt(`Stage ${stage} \n \n Guess a number between 1 and ${range}`);
		} else if (guess != answer) {
			alert("You got it wrong! \n \n Now you have to start again");
			stage = 1;
			range=2;
			point = 1;
			guess = prompt("Guess a number between 1 and " + range);
		}
	}
	alert("Game Over");
}

// Call the function
addRange(range);