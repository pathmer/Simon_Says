
function startGame(){
	let playerInput = true;
		
	while(playerInput){
		let random = (Math.floor(Math.random()*4));
		console.log(random);
		//play corresponding color/sound
		let simonArr = [];
		simonArr.push(random);
		
		for(let i = 0; i < simonArr; i++){
			//play audio
			if(simonArr[i]==0)
			{
				//play audio 0;
			}			
			if(simonArr[i]==1)
			{
				//play audio 1;
			}
			if(simonArr[i]==2)
			{
				//play audio 2;
			}
			if(simonArr[i]==3)
			{
				//play audio 3;
			}
			
			
		}
		
		//code for player input'
		//code to check player input is valid
	}
}