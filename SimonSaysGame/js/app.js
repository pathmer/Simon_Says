
function startGame(){
	let playerInput = true;
	let simonArr = [];
		
	while(playerInput){
		let level = 1;
		let random = (Math.floor(Math.random()*4));
		console.log(random);
		//play corresponding color/sound
		simonArr.push(random);
		
		for(let i = 0; i < simonArr.length; i++){
			//play audio
			console.log("starting light/audio sequence");
			if(simonArr[i]==0)
			{
				// 0 = green
				//play audio 0;
			}			
			if(simonArr[i]==1)
			{
				// 1 = red
				//play audio 1;
			}
			if(simonArr[i]==2)
			{
				// 2 = yellow
				//play audio 2;
			}
			if(simonArr[i]==3)
			{
				// 3 = blue 
				//play audio 3;
			}
		}

		//player round
		for(let i=0; i< level; i++){
			// wait for player input
			console.log("starting player input sequence");
		}
		level++;
		//code for player input'
		//code to check player input is valid
		break;
	}
}


