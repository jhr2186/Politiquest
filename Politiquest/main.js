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
    Republican: 0,
    Democrat: 0,
    states: [
        {name: "Alabama", value: 9},
        {name: "Alaska", value: 3},
        {name: "Arizona", value: 11},
        {name: "Arkansas", value: 6},
        {name: "California", value: 55},
        {name: "Colorado", value: 9},
        {name: "Connecticut", value: 7},
        {name: "Delaware", value: 3},
        {name: "Florida", value: 29},
        {name: "Georgia", value: 16},
        {name: "Hawaii", value: 4},
        {name: "Idaho", value: 4},
        {name: "Illinois", value: 20},
        {name: "Indiana", value: 11},
        {name: "Iowa", value: 6},
        {name: "Kansas", value: 6},
        {name: "Kentucky", value: 8},
        {name: "Louisiana", value: 8},
        {name: "Maine", value: 4},
        {name: "Maryland", value: 10},
        {name: "Massachusets", value: 11},
        {name: "Michigan", value: 16},
        {name: "Minnesota", value: 10},
        {name: "Mississippi", value: 6},
        {name: "Missouri", value: 10},
        {name: "Montana", value: 3},
        {name: "Nebraska", value: 5},
        {name: "Nevada", value: 6},
        {name: "New Hampshire", value: 4},
        {name: "New Jersey", value: 14},
        {name: "New Mexico", value: 5},
        {name: "New York", value: 29},
        {name: "North Carolina", value: 15},
        {name: "North Dakota", value: 3},
        {name: "Ohio", value: 18},
        {name: "Oklahoma", value: 7},
        {name: "Oregon", value: 7},
        {name: "Pennsylvania", value: 20},
        {name: "Rhode Island", value: 4},
        {name: "South Carolina", value: 9},
        {name: "South Dakota", value: 3},
        {name: "Tennessee", value: 11},
        {name: "Texas", value: 38},
        {name: "Utah", value: 6},
        {name: "Vermont", value: 3},
        {name: "Virginia", value: 13},
        {name: "Washington", value: 12},
        {name: "West Virginia", value: 5},
        {name: "Wisconsin", value: 10},
        {name: "Wyoming", value: 3},
        {name: "District of Columbia", value: 3}
    ],
    questions: undefined,
   
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