'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayTextContent = function (class_arg, message) {
	document.querySelector(class_arg).textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	if (!guess) {
		displayTextContent(".message", "⛔ No Number!");
	} else if (guess === secretNumber) {
		displayTextContent(".message", "🎉 Correct Number!");
		displayTextContent(".number", secretNumber);

		document.querySelector("body").style.backgroundColor = "#60b347";

		document.querySelector(".number").style.width = "30rem";

		if (score > highscore) {
			highscore = score;

			displayTextContent(".highscore", highscore);
		}

	} else if (guess !== secretNumber) {

		if (score > 1) {
			score--;

			displayTextContent(".message", guess > secretNumber ? "📈Too High!" : "📉Too Low!");
			displayTextContent(".score", score);

		} else {

			displayTextContent(".message", "💥You Lost the game!");
			displayTextContent(".score", 0);
		}

	}


});

document.querySelector(".again").addEventListener("click", function () {

	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;

	displayTextContent(".message", "Start guessing...");
	displayTextContent(".number", "?");
	displayTextContent(".score", score);

	document.querySelector(".guess").value = "";

	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});

