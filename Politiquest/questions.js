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
		{Q: "How long has Arizona been in a drought, according to the Arizona State Climate Office?", A: "5 years", B:"21 Years", C:"101 Years", D:"1006", Answer: 2},
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
		{Q: "What president was born in Connecticut?", A: "James K. Polk", B:"Herbert Hoover", C:"Georege W. Bush", D:"John Adams", Answer: 3},
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
		{Q: "Why was the Kennedy Space Center built in florida?", A: "So rockets don't end up going over populated areas", B:"Healthy tax exemptions", C:"Florida won it in a bid", D:"Eisenhower had a fondness for the state", Answer: 1},
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
		{Q: "What was the attack Pearl Harbor", A: "A robbery on a harbor made of pearls", B:"Russia bombed Japan", C:"Japanese sneak attack on Pearl Harbor", D:"Chinese invasion of Pacific Islands", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Idaho", questions:
		[
		{Q: "What does Idaho mean?", A: "The Sun Comes Down the Mountain", B:"Fertile Earth", C:"A declaration of promiscuous behavior", D:"Land of the Strong Deer", Answer: 1},
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
		{Q: "How much did BP spend cleaning up oil in the Gulf of Mexico in 2010?", A: "20 Million", B:"200 Million", C:"14 Billion", D:"25 Billion", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Maine", questions:
		[
		{Q: "Who helped settle the dispute between Canada and the US over the border of Maine?", A: "Abraham Lincoln", B:"The King of the Netherlands", C:"Charels Lindburg", D:"Winston Churchill", Answer: 2},
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
		{Q: "What famous botanist was born in Missouri?", A: "George Washington Carver", B:"Gregor Mendel", C:"Charels Lindburg", D:"Frederick Douglass", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Montana", questions:
		[
		{Q: "Why does the US have trouble controlling its wild horse poputlation?", A: "We dont eat enough horse meat", B:"Horses dont breed quickly enough", C:"Horses move quickly and are hard to count", D:"Wild and tame horses are too similar", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Nebraska", questions:
		[
		{Q: "How does frakking work?", A: "Drilling the using a vaccume", B:"Inject liquid in to push out", C:"Dig a well and pump it", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Nevada", questions:
		[
		{Q: "How old do you have to be to gamble in Nevada?", A: "16", B:"18", C:"20", D:"21", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New Hampshire", questions:
		[
		{Q: "What is the New Hampshire Primary", A: "A set of slightly off primary painting colors", B:"A set of laws that set the basis for the US constitution", C:"Islands off the coast used by the coast gaurd", D:"The first of the nationwide primary elections", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New Jersey", questions:
		[
		{Q: "What is on the New Jersey Liscense Plate", A: 'A picture of a beach with the words "Liberty and Prosperity"', B:'The words "Liberty and Prosperity"', C:"A picture of a bustling Dock", D:'The words "Garden State"', Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "New Mexico", questions:
		[
		{Q: "What was NOT prohibition?", A: "The sale of alhohol was illegal", B:"The production of alchohol was illegal", C:"The importation of alchohol was illegal", D:"The consumption of alchohol was made illegal", Answer: 4},
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
		{Q: "How much horse power did the Wright Brothers plane engine have?", A: "4", B:"6", C:"12", D:"16", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "North Dakota", questions:
		[
		{Q: "What type of line has become controverial in North Dakota recently", A: "For oil", B:"For Rail", C:"For new Apple Products", D:"For Comicon Entry", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Ohio", questions:
		[
		{Q: "What is the HeartBeat bill in Ohio about specificly?", A: "Organ Doners", B:"Brain Dead Patients", C:"Abortions", D:"Fighting Heart Disease", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Oklahoma", questions:
		[
		{Q: "What was the target of the Olkahoma City bombing?", A: "The Feds", B:"A Religion", C:"A Labratory", D:"The Police", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Oregon", questions:
		[
		{Q: "When did Gold prices hit their peak in the last 30 years?", A: "1996", B:"2008", C:"2012", D:"2016", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Pennsylvania", questions:
		[
		{Q: "When was the declaration of indepence voted on?", A: "May 28, 1776", B:"July 2, 1776", C:"July 4, 1776", D:"January 3, 1776", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Rhode Island", questions:
		[
		{Q: "What is the next smallest state to Rhode Island?", A: "Arizona", B:"Nevada", C:"Colorado", D:"Delaware", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "South Carolina", questions:
		[
		{Q: "What true about Super Pacs", A: "They can raise unlimited money", B:"They can coordinate with parties", C:"They cannot raise money from unions", D:"Do not have to disclose donors", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "South Dakota", questions:
		[
		{Q: "What is the least amount of electoral votes a state can have?", A: "1", B:"2", C:"3", D:"4", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Tennessee", questions:
		[
		{Q: 'What event made Tennessee the "Volunteer state"', A: "The Alamo", B:"The revolutonary war", C:"The Civil war", D:"The War of 1812", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Texas", questions:
		[
		{Q: "What is Gerrymandering", A: "Talking nonstop so a vote cant be held", B:"Purposly wasting Govt. money", C:"Interupting a speech", D:"Spliting up the vote areas to ensure your own victory", Answer: 4},
		{Q: "Who is Chris Kyle?", A: "Religious Leader", B:"Hero Cop", C:"American Sniper", D:"", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Utah", questions:
		[
		{Q: "What did Joe Hill die for?", A: "State Rights", B:"Workers Rights", C:"Communism", D:"God", Answer: 2},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Vermont", questions:
		[
		{Q: "What did anti-trust laws do to the computer industry?", A: "It prevented internet providers from working together to raise prices", B:"Windows and Intel were split up", C:"Apple was forced into chinese factories", D:"IBM was forced to unbundle software and hardware", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Virginia", questions:
		[
		{Q: "Why does Virginia hold the nations capital", A: "It was one of the biggest cities", B:"The first courthouse was built here", C:"So the south would not succeed", D:"It would be easy to defend", Answer: 3},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Washington", questions:
		[
		{Q: "What was the first passenger jet engine?", A: "Airbus A300", B:"Dewoitine D.30", C:"Ford Trimotor", D:"Boeing 707", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "West Virginia", questions:
		[
		{Q: "Why is West Virginia a different state?", A: "They succded based off of state law", B:"West Virgina was puchased from the french", C:"Split during civil war", D:"There was a vote heled on immigration", Answer: 3},
		]},
		{ name: "Wisconsin", questions:
		[
		{Q: "Who fought against the us in the Battle of Wisconsin Heights", A: "Confederates", B:"British", C:"Canadians", D:"Native Americans", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "Wyoming", questions:
		[
		{Q: "Who declared Yellowstone a national park?", A: "Franklyn D. Roosevelt", B:"Richard M. Nixon", C:"Ulysses S. Grant", D:"Howard Taft", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]},
		{ name: "DOC", questions:
		[
		{Q: "What was the Bay of Pigs", A: "Long Strech of Coastal Farms", B:"North Korea bombed Pearl Harbor", C:"Invasion of Normandy", D:"CIA invading Cuba", Answer: 4},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		{Q: "", A: "", B:"", C:"", D:"", Answer: 1},
		]}
	]
};