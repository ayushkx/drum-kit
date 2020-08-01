for(var i=0;i<7;i++)
{	
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
	{
		var buttonpress=this.innerHTML;
		playtone(buttonpress);
		animation(buttonpress);
		
	});
}
 
document.addEventListener("keypress",function(event){
   playtone(event.key.toLowerCase());
   animation(event.key.toLowerCase());

});

var tunes = [];
tunes.push(new Audio('sounds/tom-1.mp3'));
tunes.push(new Audio('sounds/tom-2.mp3'));
tunes.push(new Audio('sounds/tom-3.mp3'));
tunes.push(new Audio('sounds/tom-4.mp3'));
tunes.push(new Audio('sounds/snare.mp3'));
tunes.push(new Audio('sounds/kick-bass.mp3'));
tunes.push(new Audio('sounds/crash.mp3'));

function playtone(tone){
	switch(tone)
		{
			case "w"://var tom1=new Audio('sounds/tom-1.mp3');
	                  //tom1.play();
	                  tunes[0].play();
	                  break;
	        case "a"://var tom2=new Audio('sounds/tom-2.mp3');
	                  //tom2.play();
	                  tunes[1].play();
	                  break; 
	        case "s"://var tom3=new Audio('sounds/tom-3.mp3');
	                  //tom3.play();
	                  tunes[2].play();
	                  break;
	        case "d"://var tom4=new Audio('sounds/tom-4.mp3');
	                  //tom4.play();
	                  tunes[3].play();
	                  break;
	       case "j"://var snare=new Audio('sounds/snare.mp3');
	                  //snare.play();
	                  tunes[4].play();
	                  break;
	        case "k"://var kick=new Audio('sounds/kick-bass.mp3');
	                  //kick.play();
	                  tunes[5].play();
	                  break;
	        case "l"://var crash=new Audio('sounds/crash.mp3');
	                  //crash.play();
	                  tunes[6].play();
	                  break;    
	         default: console.log(buttonpress)  ;                                                              
		}
}

function animation(currentkey){
	document.querySelector("."+currentkey).classList.add("pressed");

	setTimeout(function(){
		document.querySelector("."+currentkey).classList.remove("pressed");
	},100);
}