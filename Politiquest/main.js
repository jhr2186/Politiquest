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
        question: 3,
        end: 4
    },
    Republican: 0,
    redStates: [],
    Democrat: 0,
    blueStates: [],
    redTurn: false,
    blueTurn: true,
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
    currentState: undefined,
    questions: undefined,
    question: undefined,
    correct: false,
    answer: undefined,
   
    init: function(){	
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d');
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        
        this.gamestate = this.gamestates.menu;
        
        this.getRandomState();

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
        else if(this.gamestate == this.gamestates.instruction){
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
        else if(this.gamestate == this.gamestates.game){
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, 250, 600);
            this.fillText("Democrat", 125, 50, 'bold 30pt Times New Roman', "black");
            this.fillText(this.Democrat, 125, 125, 'bold 30pt Times New Roman', "black");
            ctx.fillStyle = "red";
            ctx.fillRect(1150, 0, 250, 600);
            this.fillText("Republican", 1275, 50, 'bold 30pt Times New Roman', "black");
            this.fillText(this.Republican, 1275, 125, 'bold 30pt Times New Roman', "black");
            ctx.fillStyle = "black";
            ctx.fillRect(25, 75, 200, 5);
            ctx.fillRect(1175, 75, 200, 5);
            
            //list states that players have won
            if(this.blueStates.length != 0){
                for(var i = 0; i < this.blueStates.length; i++){
                    this.fillText(this.blueStates[i], 125, 160 + (i * 18), '10pt Times New Roman', "black")
                }
            }
            
            if(this.redStates.length != 0){
                for(var i = 0; i < this.redStates.length; i++){
                    this.fillText(this.redStates[i], 1275, 160 + (i * 18), '10pt Times New Roman', "black")
                }
            }
            
            this.displayMap(ctx);
            
            ctx.fillStyle = "white";
            ctx.fillRect(350, 500, 300, 50);
            ctx.fillRect(750, 500, 300, 50);
            this.fillText("Next State: " + this.currentState.name, 500, 525, '20pt Times New Roman', 'black');
            this.fillText("Get question", 900, 525, '20pt Times New Roman', 'black');
            
        }
        else if(this.gamestate == this.gamestates.question){
            //question page
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, 250, 600);
            this.fillText("Democrat", 125, 50, 'bold 30pt Times New Roman', "black");
            this.fillText(this.Democrat, 125, 125, 'bold 30pt Times New Roman', "black");
            ctx.fillStyle = "red";
            ctx.fillRect(1150, 0, 250, 600);
            this.fillText("Republican", 1275, 50, 'bold 30pt Times New Roman', "black");
            this.fillText(this.Republican, 1275, 125, 'bold 30pt Times New Roman', "black");
            ctx.fillStyle = "black";
            ctx.fillRect(25, 75, 200, 5);
            ctx.fillRect(1175, 75, 200, 5);
            
            //list states that players have won
            if(this.blueStates.length != 0){
                for(var i = 0; i < this.blueStates.length; i++){
                    this.fillText(this.blueStates[i], 125, 160 + (i * 18), '10pt Times New Roman', "black")
                }
            }
            
            if(this.redStates.length != 0){
                for(var i = 0; i < this.redStates.length; i++){
                    this.fillText(this.redStates[i], 1275, 160 + (i * 18), '10pt Times New Roman', "black")
                }
            }
            
            //uncomment when all questions are filled
            //this.fillText(this.question.Q, 700, 100, 'bold 40pt Times New Roman', 'white');
            
            if(!this.correct){
                for(var i = 0; i < 4; i++){
                    ctx.fillStyle = 'white';
                    ctx.fillRect(300, 200 + (i*100), 800, 90);
                }
                
                //uncomment when questions are all done
                /*
                this.fillText(this.question.A, 700, 245, '30pt Times New Roman', 'black');
                this.fillText(this.question.B, 700, 345, '30pt Times New Roman', 'black');
                this.fillText(this.question.C, 700, 445, '30pt Times New Roman', 'black');
                this.fillText(this.question.D, 700, 545, '30pt Times New Roman', 'black');
                */
            }
            else{
                ctx.fillStyle = "white";
                ctx.fillRect(800, 500, 200, 80);
                this.fillText("Next Round", 900, 40, '30pt Times New Roman', 'black');
            }
        }
        else if(this.gamestate == this.gamestates.end){
            //end
        }
        
        ctx.restore();
    },
    
    displayMap: function(ctx){
        var map = document.querySelector("#map");
        ctx.drawImage(map, 350, 25, 700, 400);
    },
    
    getRandomState: function(){
        var num = getRandom(0, this.states.length);
        var randState = this.states[num];
        
        this.currentState = randState;
        this.states.splice(num, 1);
    },
    
    getQuestion: function(){
        var stateName = this.currentState.name;
        console.log(this.questions);
        var stateList = this.questions.states;
        var resultState;
        
        for(var i = 0; i < stateList.length; i++){
            if(stateList[i].name == stateName){
                resultState = stateList[i];
                this.questions.states.splice(i, 1);
                break;
            }
        }
        
        //pick a question
        var randNum = getRandom(0, resultState.questions.length);
        
        this.answer = resultState.questions[randNum].answer;
        
        this.question = resultState.questions[randNum];
    },

    mouseDown: function(e)
    {
        var main = app.main;
        var mouse = getMouse(e);
		if(main.gamestate == main.gamestates.menu){
			if(mouse.x>400&&mouse.x<1000&&mouse.y>250&&mouse.y<350){
				main.gamestate = main.gamestates.game;
            }
			else if(mouse.x>400&&mouse.x<1000&&mouse.y>400&&mouse.y<500){
				main.gamestate = main.gamestates.instruction;
			}
		}
		else if(main.gamestate == main.gamestates.instruction){
			if(mouse.x>400&&mouse.x<1000&&mouse.y>450&&mouse.y<550){
				main.gamestate = main.gamestates.menu;
			}
		}
		else if(main.gamestate == main.gamestates.game){
			if(mouse.x > 750 && mouse.x < 1050 && mouse.y > 500 && mouse.y < 550){
				main.gamestate = main.gamestates.question;
                main.correct = false;
                main.getQuestion();
			}
		}
        else if(main.gamestate == main.gamestates.question){
            if(!this.correct){
                if(mouse.x > 300 && mouse.x < 1100){
                    if(mouse.y > 200 && mouse.y < 290 && this.question.A != "Wrong"){
                        main.checkAnswer(1);
                    }
                    else if(mouse.y > 200 && mouse.y < 290 && this.question.B != "Wrong"){
                        main.checkAnswer(2);
                    }
                    else if(mouse.y > 200 && mouse.y < 290 && this.question.C != "Wrong"){
                        main.checkAnswer(3);
                    }
                    else if(mouse.y > 200 && mouse.y < 290 && this.question.D != "Wrong"){
                        main.checkAnswer(4);
                    }
                } 
            }
            else{
                if(mouse.x > 800 && mouse.x < 1000 && mouse.y > 500 && mouse.y < 580){
                    this.correct = false;
                    main.gamestate == main.gamestates.game;
                }
            }
        }
        else if(main.gamestate == main.gamestates.end){
            
        }
    },
    
    checkAnswer: function(number){
        if(number == this.answer){
            this.correct = true;
            if(this.blueTurn){
                this.Democrat += this.currentState.value;
            }
            if(this.redTurn){
                this.Republican += this.currentState.value;
            }
        }
        else{
            if(number == 1){
                 this.question.A = "Wrong";
            }
            else if(number == 2){
                 this.question.B = "Wrong";
            }
            else if(number == 3){
                 this.question.C = "Wrong";
            }
            else if(number == 4){
                 this.question.D = "Wrong";
            }
            
            this.changeTurn();
        }
    },
    
    changeTurn: function(){
        if(this.blueTurn){
            //add the key to their boxes
            this.blueTurn = false;
            this.redTurn = true;
        }
        else if(this.redTurn){
            //add the key to their boxes
            this.redTurn = false;
            this.blueTurn = true;
        }
    }
};