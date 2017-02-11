
var playButton;
var canvas;
var ctx;
var gamestates = {menu:0, game:1, instruction:2};
var gamestate = gamestates.menu;
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
	
	
	ctx.strokeStyle = "#black";
    ctx.fillStyle = grd;
	ctx.strokeRect(400,250,600,100);
	ctx.fillRect(400,250,600,100);
	ctx.strokeRect(400,400,600,100);
	ctx.fillRect(400,400,600,100);
	
	ctx.font='bold 130pt Times New Roman';
	ctx.fillText('PolitiQuest',700,100);
	ctx.strokeText('PolitiQuest',700,100);
	ctx.font='bold 60pt Times New Roman';
    ctx.fillStyle = 'black';
	ctx.fillText('Play',700,300);
	ctx.fillText('Instructions',700,450);
	
	canvas.onmousedown = mouseDown;
	
	
	
};

function mouseDown(e)
{
	var mouse = getMouse(e);
	if(mouse.x>400&&mouse.x<1000&&mouse.y>250&&mouse.y<350)
	{
		gamestate=gamestates.game;
	}
	else if(mouse.x>400&&mouse.x<1000&&mouse.y>400&&mouse.y<500)
	{
		gamestate=gamestates.instruction;
	}
}

function getMouse(e){
	var mouse = {}
	mouse.x = e.pageX - e.target.offsetLeft;
	mouse.y = e.pageY - e.target.offsetTop;
	return mouse;
}

window.onload=init;