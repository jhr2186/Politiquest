
var playButton;
var canvas;
var ctx;
function init()
{	
	canvas = document.querySelector("#canvas")
	ctx = canvas.getContext('2d');
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	
	
	
    var grd = ctx.createLinearGradient(500, 0, 900, 0);
	grd.addColorStop(0, '#E91D0E');   
    grd.addColorStop(0.4, '#ffffff');
    grd.addColorStop(0.6, '#ffffff');
    grd.addColorStop(1, '#024E9C');  
	
    ctx.fillStyle = grd;
	playButton = ctx.fillRect(400,100,600,100);
	ctx.fillRect(400,350,600,100);
	
	ctx.font='bold 60pt Times New Roman';
    ctx.fillStyle = 'black';
	ctx.fillText('Play',700,150);
	ctx.fillText('Instructions',700,400);
	update();
};
function update()
{
	playButton.addEventListener("mouseover",function(){alert('it works!');});
	update();
};
window.onload=init;