'use strict';
//all the questions for the trivia

var app = app || {};

app.questions = {
	states: [
		{ name: "Alabama", questions:
		[
		{Q: "What is the capital of Alabama", A: "Montgomery", B:"Montpelier", C:"Ankara", D:"New Cambridge", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Alaska", questions:
		[
		{Q: "What is the current offical and controversial name of tallest mountain in Alaska?", A: "McKinley", B:"Denali", C:"Denora", D:"Vesuvius", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Arizona", questions:
		[
		{Q: "How long has Arizona been in a drought for according to the Arizona State Climate Office?", A: "5 years", B:"21 Years", C:"101 Years", D:"1006", Answer: 2},
		{Q: "What is Allepo", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},                                        
		{ name: "Arkansas", questions:
		[
		{Q: "What agriculture does Arkansas produce the most of?", A: "Rice, Poultry, Cotton", B:"Potatoes, Sardines, Indigo", C:"Wheat, Salmon, Sunflowers", D:"Barley, Cheese, Pine Trees", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "California", questions:
		[
		{Q: "How much is the production of marijuana taxed in this state?", A: "$5.25/ounce", B:"$9.25/ounce", C:"$11/ounce", D:"$15.33/ounce", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Colorado", questions:
		[
		{Q: "Why was Fort Collins built?", A: "For the War of 1812", B:"For the war started in 1776", C:"By Squatters to fend off Speculators", D:"For the Indian Wars", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Connecticut", questions:
		[
		{Q: "What president was born here?", A: "James K. Polk", B:"Herbert Hoover", C:"Georege W. Bush", D:"John Adams", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Delaware", questions:
		[
		{Q: "What ocean does Delaware touch?", A: "Pacific", B:"Artic", C:"Indian", D:"Atlantic", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Florida", questions:
		[
		{Q: "Why was the Kennedy Space Center built here?", A: "So rockets don't end up going over populated areas", B:"Healthy tax exemptions", C:"Florida won it in a bid", D:"Eisenhower had a fondness for the state", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Georgia", questions:
		[
		{Q: "Around how many tons of peaches does Georgia produce a year?", A: "20,000 tons", B:"40,000 tons", C:"60,000 tons", D:"80,000 tons", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Hawaii", questions:
		[
		{Q: "How many main islands make up Hawaii", A: "6", B:"7", C:"8", D:"9", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Idaho", questions:
		[
		{Q: "What does Idaho mean?", A: "The Sun Comes Down the Mountain", B:"Fertile Earth", C:"A declaration of promiscuous behavior", D:"Land of the strong deer", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Illinois", questions:
		[
		{Q: "What is a chicago typewriter?", A: "A hot dog", B:"A news Paper", C:"A typewriter", D:"A gun", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Indiana", questions:
		[
		{Q: "How many laps in the Indy 500?", A: "50", B:"150", C:"200", D:"500", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Iowa", questions: 
		[
		{Q: "What river runs along Iowa", A: "Mississippi River", B:"Ohio Rver", C:"Putnam River", D:"Red River", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Kansas", questions: 
		[
		{Q: "What was the real name of Obamacare?", A: "Excecutive order 9066", B:"RomneyCare", C:"Commonwealth Health Insurance Connector Authority", D:"The Affordable Care Act", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Kentucky", questions:
		[
		{Q: "What is the obesity rate among adults in the US?", A: "20%", B:"25%", C:"30%", D:"35%", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Louisiana", questions:
		[
		{Q: "How much did BP spend on cleaning up oil in the Gulf of Mexico from the 2010 spill?", A: "20 Million", B:"200 Million", C:"14 Billion", D:"25 Billion", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Maine", questions:
		[
		{Q: "Who tried to help settle the dispute between Canada and the US over the northern boundry of Maine?", A: "Abraham Lincoln", B:"The King of the Netherlands", C:"Charels Lindburg", D:"Winston Churchill", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Maryland", questions:
		[
		{Q: "What will you be fined for using spring-loaded trap door traps for crab fishing?", A: "$0", B:"$500", C:"$1,000", D:"$10,000", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Massachusets", questions:
		[
		{Q: "What boat that failed its voyage with the Mayflower?", A: "Nina", B:"WellSprout", C:"Speedwell", D:"DaisyChain", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Michigan", questions:
		[
		{Q: "What year was Ford Founded?", A: "1876", B:"1887", C:"1903", D:"1924", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Minnesota", questions:
		[
		{Q: "How many sq ft is the Mall of America?", A: "97,300 sq ft", B:"561,000 sq ft", C:"1,230,000 sq ft", D:"4,870,000 sq ft", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Mississippi", questions: 
		[
		{Q: "What flag is part of the Mississippi state flag?", A: "The Southern Cross", B:"Betsy Ross Flag", C:"Gadsden Flag", D:"The Stars and Stripes", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Missouri", questions:
		[
		{Q: "What famous botanist was born here?", A: "George Washington Carver", B:"Gregor Mendel", C:"Charels Lindburg", D:"Frederick Douglass", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Montana", questions:
		[
		{Q: "Why does the US have trouble controlling its wild horse poputlation?", A: "We dont eat enough horse meat", B:"Horses dont breed quickly enough", C:"Horses move quickly and flea humans so they are hard to count", D:"It is hard to distinguish between wild and tame horses", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Nebraska", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Nevada", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New Hampshire", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New Jersey", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New Mexico", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New York", questions:
		[
		{Q: "How many presidents were born in New York state?", A: "3", B:"4", C:"5", D:"6", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},                                        
		{ name: "North Carolina", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "North Dakota", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Ohio", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Oklahoma", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Oregon", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Pennsylvania", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Rhode Island", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "South Carolina", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "South Dakota", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Tennessee", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Texas", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Utah", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Vermont", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Virginia", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Washington", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "West Virginia", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Wisconsin", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Wyoming", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "District of Columbia", questions:
		[
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]}
	]
};