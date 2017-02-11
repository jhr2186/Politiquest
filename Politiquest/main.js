'use strict'

var app = app || {};

app.main = {
    playButton: undefined,
    canvas: undefined,
    ctx: undefined,
    gamestate: undefined,
    gamestates: {
        menu: 0, 
        game: 1,
        instruction: 2,
        end: 3
    },
   
    
    init: function(){	
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d');
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        
        this.gamestate = this.gamestates.menu;

        this.canvas.onmousedown = this.mouseDown;
        
        console.log();
        this.update();
    },
    
	fillText: function(string, x, y, css, color)
	{
		this.ctx.save();
		this.ctx.font = css;
		this.ctx.fillStyle=color;
		this.ctx.fillText(string, x ,y);
		this.ctx.restore();
	},
	
    update: function () {
        // 1) LOOP
		// schedule a call to update()
	 	//requestAnimationFrame(function(){this.update()});
        this.animationID = requestAnimationFrame(this.update.bind(this));
        
        // 2) DRAW	
		// i) draw background
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, 1400, 600);
	   
		// 3) draw HUD
		this.ctx.globalAlpha = 1.0;
		this.drawHUD(this.ctx);
    },
    
    drawHUD: function(ctx){
        ctx.save();
		
        var grd = ctx.createLinearGradient(500, 0, 900, 0);
        grd.addColorStop(0, '#E91D0E');   
        grd.addColorStop(0.4, '#ffffff');
        grd.addColorStop(0.6, '#ffffff');
        grd.addColorStop(1, '#024E9C'); 
		
		var grd2 = ctx.createLinearGradient(200, 0, 1200, 0);
        grd2.addColorStop(0, '#E91D0E');   
        grd2.addColorStop(0.1, '#ffffff');
        grd2.addColorStop(0.9, '#ffffff');
        grd2.addColorStop(1, '#024E9C');
        if(this.gamestate == this.gamestates.menu){
             

            ctx.strokeStyle = "#black";
            ctx.fillStyle = grd;
            ctx.fillRect(400,250,600,100);
            ctx.fillRect(400,400,600,100);

            ctx.font='bold 130pt Times New Roman';
            ctx.fillText('PolitiQuest',700,100);
            ctx.strokeText('PolitiQuest',700,100);
            ctx.font='bold 60pt Times New Roman';
            ctx.fillStyle = 'black';
            ctx.fillText('Play',700,300);
            ctx.fillText('Instructions',700,450);
			
        }
        
        if(this.gamestate == this.gamestates.instruction){
            //instructions
			ctx.strokeStyle = "#black";
            ctx.fillStyle = grd;
            ctx.fillRect(400,450,600,100);
			
			ctx.fillStyle = grd2;
			ctx.fillRect(200,50,1000,350);
			
            ctx.font='bold 60pt Times New Roman';
            ctx.fillStyle = 'black';
            ctx.fillText('back',700,500);
        }
        
        if(this.gamestate == this.gamestates.game){
            //game
        }
        
        if(this.gamestate == this.gamestates.end){
            //end
        }
        
        ctx.restore();
    },

    mouseDown: function(e)
    {
        var main = app.main;
        var mouse = getMouse(e);
		if(main.gamestate == main.gamestates.menu)
		{
			if(mouse.x>400&&mouse.x<1000&&mouse.y>250&&mouse.y<350)
			{
				main.gamestate = main.gamestates.game;
			}
			else if(mouse.x>400&&mouse.x<1000&&mouse.y>400&&mouse.y<500)
			{
				main.gamestate = main.gamestates.instruction;
			}
		}
		else if(main.gamestate == main.gamestates.instruction)
		{
			if(mouse.x>400&&mouse.x<1000&&mouse.y>450&&mouse.y<550)
			{
				main.gamestate = main.gamestates.menu;
			}
		}
		else if(main.gamestate = main.gamestates.play)
		{
			
		}
    }
};