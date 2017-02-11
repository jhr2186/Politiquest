function init()
{	
	var canvas = document.querySelector("#canvas")
	var ctx = canvas.getContext('2d');
	
	
	ctx.fillStyle = 'black';
	ctx.fillRect(35,50,50,50);
};

window.onload=init;