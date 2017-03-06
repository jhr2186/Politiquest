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
    demWin: false,
    repWin: false,
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
        {name: "DoC", value: 3}
    ],
    currentState: undefined,
    questions: undefined,
    question: undefined,
    correct: false,
    answer: undefined,
    wrong: undefined,
   
    init: function(){	
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext('2d');
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        
        this.gamestate = this.gamestates.menu;
        
        this.wrong = document.querySelector("#wrong");
        this.wrong.volume = 0.25;
        
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
			
			ctx.fillStyle = grd2;
			ctx.fillRect(200,50,1000,350);
            
            this.fillText("Welcome to the Presidential Campaign!", 700, 80, '30pt Times New Roman', 'black');
            this.fillText("First to 270 wins!", 700, 130, '18pt Times New Roman', 'black');
            this.fillText("Points are scored according to electoral votes", 700, 160, '18pt Times New Roman', 'black');
            this.fillText("Higher scoring states have harder questions!", 700, 190, '18pt Times New Roman', 'black');
            this.fillText("Democrats go first, if you get it wrong, the other person gets a chance to answer.", 700, 220, '18pt Times New Roman', 'black');
            this.fillText("If you get a question right, you answer first next question.", 700, 250, '18pt Times New Roman', 'black');
            this.fillText("All questions are related to American history, specific to the state you are in.", 700, 280, '18pt Times New Roman', 'black');
            this.fillText("In gameplay, press 'Get Question' button to move to question stage.", 700, 310, '18pt Times New Roman', 'black');
            this.fillText("LOOKING UP ANSWERS IS CAUSE FOR IMPEACHMENT", 700, 340, '18pt Times New Roman', 'black');
			
            ctx.fillStyle = grd;
            ctx.fillRect(400,450,600,100);
            
            ctx.font='bold 60pt Times New Roman';
            ctx.fillStyle = 'black';
            ctx.fillText('Back',700,500);
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
                    if(i < 20){
                        this.fillText(this.blueStates[i], 60, 160 + (i * 20), '14pt Times New Roman', "black");
                    }
                    else{
                        this.fillText(this.blueStates[i], 190, 160 + ((i-20) * 20), '14pt Times New Roman', "black");
                    }
                }
            }
            
            if(this.redStates.length != 0){
                for(var i = 0; i < this.redStates.length; i++){
                    if(i < 20){
                        this.fillText(this.redStates[i], 1210, 160 + (i * 20), '14pt Times New Roman', "black");
                    }
                    else{
                        this.fillText(this.redStates[i], 1340, 160 + ((i-20) * 20), '14pt Times New Roman', "black");
                    }
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
                    if(i < 20){
                        this.fillText(this.blueStates[i], 60, 160 + (i * 20), '14pt Times New Roman', "black");
                    }
                    else{
                        this.fillText(this.blueStates[i], 190, 160 + ((i-20) * 20), '14pt Times New Roman', "black");
                    }
                }
            }
            
            if(this.redStates.length != 0){
                for(var i = 0; i < this.redStates.length; i++){
                    if(i < 20){
                        this.fillText(this.redStates[i], 1210, 160 + (i * 20), '14pt Times New Roman', "black");
                    }
                    else{
                        this.fillText(this.redStates[i], 1340, 160 + ((i-20) * 20), '14pt Times New Roman', "black");
                    }
                }
            }
            
            if(!this.correct){
                this.fillText(this.question.Q, 700, 100, '20pt Times New Roman', 'white');
                
                if(this.blueTurn){
                    this.fillText("Democrats are up", 700, 160, '20pt Times New Roman', 'white');
                    console.log("blue");
                }
                else if(this.redTurn){
                    this.fillText("Republicans are up", 700, 160, '20pt Times New Roman', 'white');
                    console.log("red");
                }
                
                grd2 = ctx.createLinearGradient(300, 0, 1100, 0);
                grd2.addColorStop(0, '#E91D0E');   
                grd2.addColorStop(0.1, '#ffffff');
                grd2.addColorStop(0.9, '#ffffff');
                grd2.addColorStop(1, '#024E9C');
                
                for(var i = 0; i < 4; i++){
                    ctx.fillStyle = grd2;
                    ctx.fillRect(300, 200 + (i*100), 800, 90);
                }
                
                this.fillText(this.question.A, 700, 245, '20pt Times New Roman', 'black');
                this.fillText(this.question.B, 700, 345, '20pt Times New Roman', 'black');
                this.fillText(this.question.C, 700, 445, '20pt Times New Roman', 'black');
                this.fillText(this.question.D, 700, 545, '20pt Times New Roman', 'black');
            }
            else{
                if(this.blueTurn){
                    this.fillText("Democrats take " + this.currentState.name, 700, 200, '40pt Times New Roman', 'white');
                }
                else if(this.redTurn){
                    this.fillText("Republicans take " + this.currentState.name, 700, 200, '40pt Times New Roman', 'white');
                }
                
                ctx.fillStyle = "white";
                ctx.fillRect(600, 420, 200, 80);
                this.fillText("Next Round", 700, 460, '30pt Times New Roman', 'black');
            }
        }
        else if(this.gamestate == this.gamestates.end){
            this.displayFlags(ctx);
            
            if(this.demWin){
                this.fillText("Democrats have taken the White House!", 700, 200, 'bold 50pt Times New Roman', 'white');
                this.fillText("Try again in 4 years Republicans!", 700, 300, 'bold 50pt Times New Roman', 'white');
            }
            else if(this.repWin){
                this.fillText("Republicans have taken the White House!", 700, 200, 'bold 50pt Times New Roman', 'white');
                this.fillText("Try again in 4 years Democrats!", 700, 300, 'bold 50pt Times New Roman', 'white');
            }
            
            ctx.fillStyle = 'white';
            ctx.fillRect(600, 420, 200, 80);
            this.fillText("Play Again", 700, 460, '30pt Times New Roman', 'black');
        }
        
        ctx.restore();
    },
    
    displayMap: function(ctx){
        var map = document.querySelector("#map");
        ctx.drawImage(map, 350, 25, 700, 400);
    },
    
    displayFlags: function(ctx){
        var flag = document.querySelector("#flag");
        ctx.drawImage(flag, 50, 350, 500, 200);
        ctx.drawImage(flag, 850, 350, 500, 200);
    },
    
    getRandomState: function(){
        var num = getRandom(0, this.states.length);
        var randState = this.states[num];
        
        this.currentState = randState;
        this.states.splice(num, 1);
    },
    
    getQuestion: function(){
        var stateName = this.currentState.name;
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
        
        this.answer = resultState.questions[randNum].Answer;
        
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
            if(!main.correct){
                if(mouse.x > 300 && mouse.x < 1100){
                    if(mouse.y > 200 && mouse.y < 290 && main.question.A != "Wrong"){
                        main.checkAnswer(1);
                    }
                    else if(mouse.y > 300 && mouse.y < 390 && main.question.B != "Wrong"){
                        main.checkAnswer(2);
                    }
                    else if(mouse.y > 400 && mouse.y < 490 && main.question.C != "Wrong"){
                        main.checkAnswer(3);
                    }
                    else if(mouse.y > 500 && mouse.y < 590 && main.question.D != "Wrong"){
                        main.checkAnswer(4);
                    }
                } 
            }
            else{
                if(mouse.x > 600 && mouse.x < 900 && mouse.y > 420 && mouse.y < 500){
                    main.correct = false;
                    main.getRandomState();
                    main.gamestate = main.gamestates.game;
                    console.log(main.gamestate);
                }
            }
        }
        else if(main.gamestate == main.gamestates.end){
            if(mouse.x > 600 && mouse.x < 900 && mouse.y > 420 && mouse.y < 500){
                window.location.reload();
            }
        }
    },
    
    checkAnswer: function(number){
        if(number == this.answer){
            this.correct = true;
            if(this.blueTurn){
                this.Democrat += this.currentState.value;
                this.blueStates.push(this.currentState.name);
            }
            if(this.redTurn){
                this.Republican += this.currentState.value;
                this.redStates.push(this.currentState.name);
            }
            
            if(this.Democrat >= 270){
                this.demWin = true;
                this.gamestate = this.gamestates.end;
            }
            
            if(this.Republican >= 270){
                this.repWin = true;
                this.gamestate = this.gamestates.end;
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
            
            this.wrong.play();
            
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