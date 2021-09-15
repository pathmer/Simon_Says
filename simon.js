
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
		
		//code for player input'
		//code to check player input is valid
	}
}