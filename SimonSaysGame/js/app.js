
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
            let audio;
			if(simonArr[i]==0)
			{
				// 0 = green
				//play audio 0;
                audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
			}			
			if(simonArr[i]==1)
			{
				// 1 = red
				//play audio 1;
                audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
			}
			if(simonArr[i]==2)
			{
				// 2 = yellow
				//play audio 2;
                audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
			}
			if(simonArr[i]==3)
			{
				// 3 = blue 
				//play audio 3;
                audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
			}
            audio.play();
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
function audio(input){
    let audio;
    if(input==0)
    {
        // 0 = green
        //play audio 0;
        audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
        audio.play();
    }			
    else if(input==1)
    {
        // 1 = red
        //play audio 1;
        audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
        audio.play();
    }
    else if(input==2)
    {
        // 2 = yellow
        //play audio 2;
        audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
        audio.play();
    }
    else if(input==3)
    {
        // 3 = blue 
        //play audio 3;
        audio= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
        audio.play();
    }
    else {
        //error
        console.log("invalid input for function audio");
    }

}


