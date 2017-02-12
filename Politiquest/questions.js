'use strict';
//all the questions for the trivia

var app = app || {};

app.questions = {
	states: [
		{ name: "Alabama", questions:
		[
		{Q: "What is the capital of Alabama", A: "Montgomery", B:"Montpelier", C:"Ankara", D:"New Cambridge", Answer: 1},
		{Q: "Where was Rosa Parks arrested for sitting in the front of the bus?", A: "Akron", B:"Motgomery", C:"Madison", D:"Florence", Answer: 2},
		{Q: "What were the Selma to Montgomery Marches for", A: "Native Americans", B:"Confederate POWs", C:"Civil Rights", D:"Health", Answer: 3},
		{Q: "What was Bloody Sunday in Alabama?", A: "School Shooting", B:"Soldiers shot 26 unarmed civilians", C:"100 marchers killed by police", D:"Billy Clubs and Tear Gas used on Protesters", Answer: 4},
		{Q: "What happened when Albert Patterson died", A: "Prompted Clean up of Phenix City", B:"Alabama made healthcare reform", C:"Prohibition Began", D:"Heroin became illegal", Answer: 1},
		]},
		{ name: "Alaska", questions:
		[
		{Q: "What is the current offical and controversial name of tallest mountain in Alaska?", A: "McKinley", B:"Denali", C:"Denora", D:"Vesuvius", Answer: 2},
		{Q: "What is the statewide tax rate for alaska?", A: "0%", B:"2%", C:"5%", D:"7%", Answer: 1},
		{Q: "Who did the US buy Alaska from?", A: "French", B:"Russia", C:"Natives", D:"Canada", Answer: 2},
		{Q: "When are the most lucrative Alaskan crab fishing seasons?", A: "summer", B:"spring", C:"fall and winter", D:"spring and fall", Answer: 3},
		{Q: "What does the Trans-Alaska pipeline move?", A: "sulfer", B:"water", C:"Cold Air", D:"Oil", Answer: 4},
		]},
		{ name: "Arizona", questions:
		[
		
		{Q: "Where was AriZona Beverage Company founeded", A: "Arizona", B:"New York", C:"New Mexico", D:"Canada", Answer: 2},
		{Q: "How long has Arizona been in a drought, according to the Arizona State Climate Office?", A: "5 years", B:"21 Years", C:"101 Years", D:"1006", Answer: 2},
		{Q: "What was Giffords doing during the Arizona Shooting?", A: 'A photo-op with "regular citizens"', B:"Calling the police", C:'"Congress on Your Corner" event', D:"Giving a speech", Answer: 3},
		{Q: "What did they do for the first woman to die in the Iraq invasion?", A: "Name a day for her", B:"Hold a funeral procession across town", C:"Name a mountain after her", D:"Name a student grant after her", Answer: 3},
		{Q: "What is against the law in Arizona", A: "To be in the desert without a hat", B:"To go swimming in the Colorado River", C:"Drink from the Colorado River", D:"To refuse someone a glass of water", Answer: 4},
		]},                                        
		{ name: "Arkansas", questions:
		[
		{Q: "What agriculture does Arkansas produce the most of?", A: "Rice, Poultry, Cotton", B:"Potatoes, Sardines, Indigo", C:"Wheat, Salmon, Sunflowers", D:"Barley, Cheese, Pine Trees", Answer: 1},
		{Q: "How many nations owned Arkansas?", A: "1", B:"2", C:"3", D:"4", Answer: 3},
		{Q: "Who were the Little Rock Nine?", A: "Killed Native American Protesters", B:"Black Students trying to go to school", C:"The Initial settlers of Arkansas", D:"Students killed in Vietnam protest", Answer: 2},
		{Q: "In 1927 how much of the state did the Mississippi river flood in 1927?", A: "1/3", B:"1/9", C:"1/5", D:"3/11", Answer: 3},
		{Q: "Which president was Bill Clinton", A: "39th", B:"40th", C:"41th", D:"42th", Answer: 4},
		]},
		{ name: "California", questions:
		[
		{Q: "How much is the production of marijuana taxed in this state?", A: "$5.25/ounce", B:"$9.25/ounce", C:"$11/ounce", D:"$15.33/ounce", Answer: 2},
		{Q: "Why did Hollywood become the center for film production?", A: "Film Makers fled from Thomas Edison to here", B:"Low Taxes on production materials", C:"Good state to shoot westerns", D:"Lots of creative minds born here", Answer: 1},
		{Q: "What was the name of the gang that burnt down a lot of San Francisco", A: "Underbelly Dogs", B:"Sydney Ducks", C:"George Capbells Gang", D:"The Rompus Roosters", Answer: 2},
		{Q: "How did John Jenkins rob a store in 1851", A: "Breaking in at night, dressed as an old lady", B:"Flooding the room with wild dogs", C:"Walking in taking it, then rowing away", D:"Gun point, with a wooden toy", Answer: 3},
		{Q: "Who did Fort Point help defend against?", A: "The Japanese", B:"Native Americans", C:"the British", D:"Nobody", Answer: 4},
		]},
		{ name: "Colorado", questions:
		[
		{Q: "Why was Fort Collins built?", A: "For the War of 1812", B:"For the war started in 1776", C:"By Squatters to fend off Speculators", D:"For the Indian Wars", Answer: 4},
		{Q: "Mike was a headless ____?", A: "Chicken", B:"Lizard", C:"Cockroach", D:"Buffalo", Answer: 1},
		{Q: "What does Xcel produce?", A: "Spreadsheets", B:"Energy", C:"Computer Chips", D:"Printers", Answer: 2},
		{Q: "What was the Sherman Silver Purchase Act", A: "Authorized free coinage of silver", B:"Lowered taxes on silver purchases", C:"Made US second largest silver purchaser in the world", D:"Made it more difficult to sell false silver", Answer: 3},
		{Q: "What was the Ludlow Massacre?", A: "A school shooting", B:"Protesting University students shot", C:"Factory Workers burned to death", D:"Protesting miners and their Familes were killed", Answer: 4},
		]},
		{ name: "Connecticut", questions:
		[
		{Q: "What president was born in Connecticut?", A: "James K. Polk", B:"Herbert Hoover", C:"Georege W. Bush", D:"John Adams", Answer: 3},
		{Q: "Who published the first Dictionary?", A: "Noah Webster", B:"John Merriam", C:"Don Oxford", D:"Chamberlin Roget", Answer: 1},
		{Q: "What is the USS Nautilus?", A: "Largest Aircraft Carrier", B:"First Nuclear-Powered Submarine", C:"Only Active wooden battleship", D:"First Destroyer that used Sonar", Answer: 2},
		{Q: 'Who said "My only regret is that I have but one life to give for my country?"', A: "John Hancock", B:"General Patton", C:"Nathan Hale", D:"John Kennedy", Answer: 3},
		{Q: "How many entries did the first phone book have?", A: "10", B:"20", C:"40", D:"50", Answer: 4},
		]},
		{ name: "Delaware", questions:
		[
		{Q: "What ocean does Delaware touch?", A: "Pacific", B:"Artic", C:"Indian", D:"Atlantic", Answer: 4},
		{Q: "What is the state song of Delaware?", A: "Our Delaware", B:"Yankee Doodle", C:"The Nutmeg", D:"You are My Sunshine", Answer: 1},
		{Q: "What is the background color of the Deleware state flag", A: "Blue", B:"Rainbow", C:"Black", D:"Yellow", Answer: 1},
		{Q: "What state is closest to Delaware", A: "New Jersey", B:"Arizona", C:"Vermont", D:"New Mexico", Answer: 1},
		{Q: "Who was painted crossing the Delaware River?", A: "Confederate Troops", B:"British Soldiers", C:"George Washington", D:"Sacagawea", Answer: 3},
		]},
		{ name: "Florida", questions:
		[
		{Q: "Why was the Kennedy Space Center built in florida?", A: "So rockets don't end up going over populated areas", B:"Healthy tax exemptions", C:"Florida won it in a bid", D:"Eisenhower had a fondness for the state", Answer: 1},
		{Q: "What can you be fined for harrassing manatees?", A: "$25,000", B:"$50,000", C:"$70,000", D:"$100,000", Answer: 2},
		{Q: "When was the American Aligator listed as an endangerd species?", A: "1962", B:"1967", C:"1975", D:"1983", Answer: 2},
		{Q: "Who did Matthew Scheidt pose as?", A: "An American Citizen", B:"His father", C:"A doctor, then a police officer", D:"A nasa scientist", Answer: 3},
		{Q: "What did Reza Baluchi try do do twice?", A: "Feed an aligator pizza", B:"Buy NASA from the US Govt.", C:"Pose as Shrek in Disneyworld", D:"Run in a bubble from Florida to the Bermuda Triangle", Answer: 4},
		]},
		{ name: "Georgia", questions:
		[
		{Q: "Around how many tons of peaches does Georgia produce a year?", A: "20,000 tons", B:"40,000 tons", C:"60,000 tons", D:"80,000 tons", Answer: 2},
		{Q: "What ingredient is no longer used in any Coca Cola product?", A: "Cocaine", B:"Natural Surgar", C:"Coca nut", D:"Fruit", Answer: 1},
		{Q: "Who was the first African American to play in Major League Baseball?", A: "Jessie Owens", B:"Rube Foster", C:"Jackie Robinson", D:"Satchel Paige", Answer: 3},
		{Q: "Who pardoned the Vietnam draft dodgers?", A: "Richard M. Nixon", B:"Jimmy Carter", C:"Gerald Ford", D:"Bill Clinton", Answer: 2},
		{Q: "How long was the Iranian Hosage Crisis?", A: "Four Months", B:"Six months", C:"A year and a few months", D:"Two years", Answer: 3},
		]},
		{ name: "Hawaii", questions:
		[
		{Q: "How many main islands make up Hawaii", A: "6", B:"7", C:"8", D:"9", Answer: 3},
		{Q: "What was the attack Pearl Harbor", A: "A robbery on a harbor made of pearls", B:"Russia bombed Japan", C:"Japanese sneak attack on Pearl Harbor", D:"Chinese invasion of Pacific Islands", Answer: 3},
		{Q: "What is the largest volcano on Earth?", A: "Krakatoa", B:"Mauna Loa", C:"Vesuvius", D:"Pompeii", Answer: 2},
		{Q: "Hawaii was the ____ state admitted to the union.", A: "48th", B:"49th", C:"50th", D:"51st", Answer: 1},
		{Q: "What did Ellery Chun invent?", A: "Hawaiian pizza", B:"Electricity", C:"Tea", D:"The Hawaiian Shirt", Answer: 4},
		]},
		{ name: "Idaho", questions:
		[
		{Q: "What does Idaho mean?", A: "The Sun Comes Down the Mountain", B:"Fertile Earth", C:"A declaration of promiscuous behavior", D:"Land of the Strong Deer", Answer: 1},
		{Q: "What was Henry Blummer before he became an outlaw?", A: "Governor", B:"Sherif", C:"Railroad Tycoon", D:"General Store Owner", Answer: 2},
		{Q: "What did they nickname the insider informant for watergate William Mark Felt?", A: "Leaky Damn", B:"Water Shed", C:"Dark Pockets", D:"Deep Thoat", Answer: 4},
		{Q: "What planes did Pappy Boyington become famous for shooting down?", A: "German", B:"Japanese", C:"Chinese", D:"Arab", Answer: 2},
		{Q: "What animal is hunted during Predator Hunting Contest and Fur Rendevous?", A: "Bear", B:"Mountain Lion", C:"Wolf and Cayote", D:"Falcons", Answer: 3},
		]},
		{ name: "Illinois", questions:
		[
		{Q: "What is a chicago typewriter?", A: "A hot dog", B:"A news Paper", C:"A typewriter", D:"A gun", Answer: 4},
		{Q: "How long did the Chicago fire last?", A: "8 hours", B:"16 hours", C:"2 days", D:"a week", Answer: 3},
		{Q: "What city did Playboy start in?", A: "Newport", B:"Chicago", C:"San Francico", D:"Los Angeles", Answer: 2},
		{Q: "Where was the Barack Obama born?", A: "Chicago", B:"Nevada", C:"Newport", D:"Detroit", Answer: 1},
		{Q: "What is not a nickname for Chicago", A: "The Windy City", B:"Chi-Town", C:"The Lake City", D:"The City of Big Sholders", Answer: 3},
		]},
		{ name: "Indiana", questions:
		[
		{Q: "How many laps in the Indy 500?", A: "50", B:"150", C:"200", D:"500", Answer: 3},
		{Q: "How did John Dillinger exape Lake Country Jail?", A: "Carving a pistol from a wooden block", B:"Switching places with his wife durng a conjugal", C:"Slipping through the bars", D:"Opening the unlocked door", Answer: 1},
		{Q: "Who did the serial killer Herb Baumeister targer?", A: "Young Women", B:"Women his age", C:"Gay men his age", D:"Older gay men", Answer: 3},
		{Q: "In Hammond what company power plant exploded?", A: "BP", B:"Griffith Energy", C:"Energetix Inc.", D:"Sourthern Energy Co.", Answer: 4},
		{Q: "When was Nascar founded", A: "1856", B:"1894", C:"1921", D:"1948", Answer: 4},
		]},
		{ name: "Iowa", questions: 
		[
		{Q: "What river runs along Iowa", A: "Mississippi River", B:"Ohio Rver", C:"Putnam River", D:"Red River", Answer: 1},
		{Q: "What is John Wayne famous for playing?", A: "The Paino", B:"Cowboys", C:"Knights", D:"Soldiers", Answer: 2},
		{Q: "What president is from Iowa?", A: "Gerald Ford", B:"Herbert Hoover", C:"Jimmy Carter", D:"Howard Taft", Answer: 2},
		{Q: "Who attacked the frontier settlements during the Spirit Lake Massacre?", A: "Cherokee", B:"Shawnee Tribe", C:"Cahto Tribe", D:"Santee Sioux", Answer: 4},
		{Q: "What is the state motto?", A: "We shall overcome", B:"Our liberties we prize and our rights we will maintain.", C:"The people rule", D:"In freedom we reign", Answer: 2},
		]},
		{ name: "Kansas", questions: 
		[
		{Q: "What was the real name of Obamacare?", A: "Excecutive order 9066", B:"RomneyCare", C:"Commonwealth Health Insurance Connector Authority", D:"The Affordable Care Act", Answer: 4},
		{Q: "What can you not make wheat into?", A: "Beer", B:"Bread", C:"Latkas", D:"Flour", Answer: 3},
		{Q: "What year did the Kansas River flood into Fort Kays State College?", A: "1886", B:"1923", C:"1951", D:"1966", Answer: 2},
		{Q: "What was Brown v. Board of Education about", A: "Evolution", B:"Dinosaurs", C:"Segregation", D:"Charter Schools", Answer: 3},
		{Q: "What caused the populist uprising in the 1890s", A: "Russian Inflitration", B:"Droughts", C:"The Red Scare", D:"Nazi Sympathizers", Answer: 2},
		]},
		{ name: "Kentucky", questions:
		[
		{Q: "What is the obesity rate among adults in the US?", A: "20%", B:"25%", C:"30%", D:"35%", Answer: 4},
		{Q: "What is Kentuckys nickname?", A: "The Bluegrass State", B:"The Henhouse State", C:"Blue Hen State", D:"Garden State", Answer: 1},
		{Q: "What is Kentucky Tunas real name?", A: "Salmo Salar", B:"Asian carp", C:"Stillwater Bass", D:"Micropterus Salmoides", Answer: 2},
		{Q: "What did the Silent Brigade or Night Riders fight in?", A: "Black Patch Tobacco Wars", B:"Black Hawk Wars", C:"War of 1812", D:"Civil War", Answer: 1},
		{Q: "What were the Black Patch Tobacco Wars?", A: "A battle beween coporations for market share", B:"A battle between a Minopoly and Workers", C:"A fight against Tobacco", D:"Pirates trying to steal tobacco", Answer: 2},
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
		{Q: "What is the HeartBeat bill in Ohio about specificly?", A: "Organ Doners", B:"Brain Dead Patients", C:"Abortions", D:"Fighting Heart Disease", Answer: 3},
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