
let playerTry = 5;
let colors = ["green", "red", "yellow", "blue"];
let classes = ["btn btn-success", "btn btn-danger", "btn btn-warning", "btn btn-primary"];
let audioArr = [];
let simonArr = [];
audioArr.push(new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"));
audioArr.push(new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"));
audioArr.push(new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"));
audioArr.push(new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"));

document.getElementById("green").disabled = true;
document.getElementById("red").disabled = true;
document.getElementById("yellow").disabled = true;
document.getElementById("blue").disabled = true;

async function startGame(){
	let playerInput = true;
	let level = 1;
	let endgame = false;
		
	while(playerInput){
		if (endgame == true) {
			break;
		}

		// generate next button
		for (let i = 0; i < level; i++) {
			let random = (Math.floor(Math.random()*4));
			simonArr.push(random);
		}

		// computer round
		document.getElementById("green").disabled = true;
		document.getElementById("red").disabled = true;
		document.getElementById("yellow").disabled = true;
		document.getElementById("blue").disabled = true;

		await new Promise(resolve => setTimeout(resolve, 500));

		console.log("starting light/audio sequence");

		for(let i = 0; i < level; i++){
			await new Promise(resolve => setTimeout(resolve, 200));
			playbutton(simonArr[i]);
			await new Promise(resolve => setTimeout(resolve, 700));
		}

		document.getElementById("green").disabled = false;
		document.getElementById("red").disabled = false;
		document.getElementById("yellow").disabled = false;
		document.getElementById("blue").disabled = false;

		//player round
		playerTry = 5; // valid choices are 0-3, so 5 creates a wait loop until a button is pushed

		for(let i=0; i< level; i++){
			console.log("starting player input sequence");
			while (playerTry == 5) {
				await new Promise(resolve => setTimeout(resolve, 100));
			}

			if (playerTry != simonArr[i]) {
				console.log("wrong");
				// play losing sound
				endgame = true;
				break;
			}
			else {
				console.log("correct");
				playbutton(simonArr[i]);
				playerTry = 5; // resets the player button choice for the wait loop
			}
		}
		level++;
	}
	console.log("You Lose");
}


function playerinput(c) {
	playerTry = c; // sets the player button choice
}

// flashes the button and plays it's sound
async function playbutton(rightbutton) {
	console.log(colors[rightbutton]);
	await new Promise(resolve => setTimeout(resolve, 300));
	document.getElementById(colors[rightbutton]).className = "btn btn-secondary";
	audioArr[rightbutton].play();
	await new Promise(resolve => setTimeout(resolve, 300));
	document.getElementById(colors[rightbutton]).className = classes[rightbutton];
}
