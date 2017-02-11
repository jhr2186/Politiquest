function init()
{	
	var canvas = document.querySelector("#canvas")
	var ctx = canvas.getContext('2d');
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	
	ctx.fillStyle = 'black';
	ctx.fillRect(350,260,100,80);
};

window.onload=init;