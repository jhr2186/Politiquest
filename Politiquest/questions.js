'use strict';
//all the questions for the trivia

var app = app || {};

app.questions = {
	states: [
		{ name: "Alabama", questions:
		[
            {Q: "What is the capital of Alabama?", A: "Montgomery", B:"Montpelier", C:"Ankara", D:"New Cambridge", Answer: 1},
            {Q: "Where was Rosa Parks arrested for sitting in the front of the bus?", A: "Akron", B:"Motgomery", C:"Madison", D:"Florence", Answer: 2},
            {Q: "What were the Selma to Montgomery Marches for?", A: "Native Americans", B:"Confederate POWs", C:"Civil Rights", D:"Health", Answer: 3},
            {Q: "What was Bloody Sunday in Alabama?", A: "School Shooting", B:"Soldiers shot 26 unarmed civilians", C:"100 marchers killed by police", D:"Billy Clubs and Tear Gas used on Protesters", Answer: 4},
            {Q: "What happened when Albert Patterson died?", A: "Prompted Clean up of Phenix City", B:"Alabama made healthcare reform", C:"Prohibition Began", D:"Heroin became illegal", Answer: 1}
		]},
		{ name: "Alaska", questions:
		[
            {Q: "What is the current offical and controversial name of tallest mountain in Alaska?", A: "McKinley", B:"Denali", C:"Denora", D:"Vesuvius", Answer: 2},
            {Q: "What is the statewide tax rate for Alaska?", A: "0%", B:"2%", C:"5%", D:"7%", Answer: 1},
            {Q: "Who did the US buy Alaska from?", A: "French", B:"Russia", C:"Natives", D:"Canada", Answer: 2},
            {Q: "When is(are) the most lucrative Alaskan Crab fishing season(s)?", A: "Summer", B:"Spring", C:"Fall and Winter", D:"Spring and Fall", Answer: 3},
            {Q: "What does the Trans-Alaska pipeline move?", A: "sulfer", B:"water", C:"Cold Air", D:"Oil", Answer: 4}
		]},
		{ name: "Arizona", questions:
		[
            {Q: "Where was AriZona Beverage Company founded?", A: "Arizona", B:"New York", C:"New Mexico", D:"Canada", Answer: 2},
            {Q: "How long has Arizona been in a drought, according to the Arizona State Climate Office?", A: "5 years", B:"21 Years", C:"101 Years", D:"1006 years", Answer: 2},
            {Q: "What was Congresswoman Gabby Giffords doing during the Arizona Shooting?", A: 'A photo-op with "regular citizens"', B:"Calling the police", C:'"Congress on Your Corner" event', D:"Giving a speech", Answer: 3},
            {Q: "What did they do for the first woman to die in the Iraq invasion?", A: "Name a day for her", B:"Hold a funeral procession across town", C:"Name a mountain after her", D:"Name a student grant after her", Answer: 3},
            {Q: "What is against the law in Arizona?", A: "To be in the desert without a hat", B:"To go swimming in the Colorado River", C:"Drink from the Colorado River", D:"To refuse someone a glass of water", Answer: 4}
		]},                                        
		{ name: "Arkansas", questions:
		[
            {Q: "What agriculture does Arkansas produce the most of?", A: "Rice, Poultry, Cotton", B:"Potatoes, Sardines, Indigo", C:"Wheat, Salmon, Sunflowers", D:"Barley, Cheese, Pine Trees", Answer: 1},
            {Q: "How many nations owned Arkansas?", A: "1", B:"2", C:"3", D:"4", Answer: 3},
            {Q: "Who were the Little Rock Nine?", A: "Killed Native American Protesters", B:"Black Students trying to go to school", C:"The Initial settlers of Arkansas", D:"Students killed in Vietnam protest", Answer: 2},
            {Q: "In 1927 what fraction of the state did the Mississippi river flood?", A: "1/3", B:"1/9", C:"1/5", D:"3/11", Answer: 3},
            {Q: "Which president was Bill Clinton", A: "39th", B:"40th", C:"41st", D:"42nd", Answer: 4}
		]},
		{ name: "California", questions:
		[
            {Q: "How much is the production of marijuana taxed in this state?", A: "$5.25/ounce", B:"$9.25/ounce", C:"$11/ounce", D:"$15.33/ounce", Answer: 2},
            {Q: "Why did Hollywood become the center for film production?", A: "Movie makers wanted to get away from Thomas Edison", B:"Low Taxes on production materials", C:"Good state to shoot westerns", D:"Lots of creative minds born here", Answer: 1},
            {Q: "What was the name of the gang that burnt down a lot of San Francisco?", A: "Underbelly Dogs", B:"Sydney Ducks", C:"George Capbells Gang", D:"The Rompus Roosters", Answer: 2},
            {Q: "How did John Jenkins rob a store in 1851?", A: "Breaking in at night, dressed as an old lady", B:"Flooding the room with wild dogs", C:"Walking in, taking the money, then rowing away", D:"Gun point, with a wooden toy", Answer: 3},
            {Q: "Who did Fort Point help defend against?", A: "The Japanese", B:"Native Americans", C:"the British", D:"Nobody", Answer: 4}
		]},
		{ name: "Colorado", questions:
		[
            {Q: "Why was Fort Collins built?", A: "For the War of 1812", B:"For the war started in 1776", C:"By Squatters to fend off Speculators", D:"For the Indian Wars", Answer: 4},
            {Q: "Mike was a headless ____?", A: "Chicken", B:"Lizard", C:"Cockroach", D:"Buffalo", Answer: 1},
            {Q: "What does Xcel produce?", A: "Spreadsheets", B:"Energy", C:"Computer Chips", D:"Printers", Answer: 2},
            {Q: "What was the Sherman Silver Purchase Act", A: "Authorized free coinage of silver", B:"Lowered taxes on silver purchases", C:"Made US second largest silver purchaser in the world", D:"Made it more difficult to sell false silver", Answer: 3},
            {Q: "What was the Ludlow Massacre?", A: "A school shooting", B:"Protesting University students shot", C:"Factory Workers burned to death", D:"Protesting miners and their Familes were killed", Answer: 4}
		]},
		{ name: "Connecticut", questions:
		[
            {Q: "What president was born in Connecticut?", A: "James K. Polk", B:"Herbert Hoover", C:"Georege W. Bush", D:"John Adams", Answer: 3},
            {Q: "Who published the first Dictionary?", A: "Noah Webster", B:"John Merriam", C:"Don Oxford", D:"Chamberlin Roget", Answer: 1},
            {Q: "What is the USS Nautilus?", A: "Largest Aircraft Carrier", B:"First Nuclear-Powered Submarine", C:"Only Active wooden battleship", D:"First Destroyer that used Sonar", Answer: 2},
            {Q: 'Who said "My only regret is that I have but one life to give for my country?"', A: "John Hancock", B:"General Patton", C:"Nathan Hale", D:"John Kennedy", Answer: 3},
            {Q: "How many entries did the first phone book have?", A: "10", B:"20", C:"40", D:"50", Answer: 4}
		]},
		{ name: "Delaware", questions:
		[
            {Q: "What ocean does Delaware touch?", A: "Pacific", B:"Artic", C:"Indian", D:"Atlantic", Answer: 4},
            {Q: "What is the state song of Delaware?", A: "Our Delaware", B:"Yankee Doodle", C:"The Nutmeg", D:"You are My Sunshine", Answer: 1},
            {Q: "What is the background color of the Deleware state flag?", A: "Blue", B:"Rainbow", C:"Black", D:"Yellow", Answer: 1},
            {Q: "What state is closest to Delaware?", A: "New Jersey", B:"Arizona", C:"Vermont", D:"New Mexico", Answer: 1},
            {Q: "Who was painted crossing the Delaware River?", A: "Confederate Troops", B:"British Soldiers", C:"George Washington", D:"Sacagawea", Answer: 3}
		]},
		{ name: "Florida", questions:
		[
            {Q: "Why was the Kennedy Space Center built in Florida?", A: "So rockets don't end up going over populated areas", B:"Healthy tax exemptions", C:"Florida won it in a bid", D:"Eisenhower had a fondness for the state", Answer: 1},
            {Q: "What can you be fined for harrassing manatees?", A: "$25,000", B:"$50,000", C:"$70,000", D:"$100,000", Answer: 2},
            {Q: "When was the American Alligator listed as an endangered species?", A: "1962", B:"1967", C:"1975", D:"1983", Answer: 2},
            {Q: "Who did Matthew Scheidt from Florida pose as?", A: "An American Citizen", B:"His father", C:"A doctor, then a police officer", D:"A NASA scientist", Answer: 3},
            {Q: "What did Reza Baluchi from Florida try do do twice?", A: "Feed an alligator pizza", B:"Buy NASA from the US Govt.", C:"Pose as Shrek in Disneyworld", D:"Run in a bubble from Florida to the Bermuda Triangle", Answer: 4},
            {Q: "Disney World is NOT the home to which complex?", A: "Animal Kingdom", B:"Magic Kingdom", C:"MGM Studios", D:"Islands of Adventure", Answer: 4}
		]},
		{ name: "Georgia", questions:
		[
            {Q: "Around how many peaches does Georgia produce a year?", A: "20,000 tons", B:"40,000 tons", C:"60,000 tons", D:"80,000 tons", Answer: 2},
            {Q: "What ingredient is no longer used in any Coca-Cola product?", A: "Cocaine", B:"Natural Surgar", C:"Coca nut", D:"Fruit", Answer: 1},
            {Q: "Who was the first African American to play in Major League Baseball?", A: "Jessie Owens", B:"Rube Foster", C:"Jackie Robinson", D:"Satchel Paige", Answer: 3},
            {Q: "Who pardoned the Vietnam draft dodgers?", A: "Richard M. Nixon", B:"Jimmy Carter", C:"Gerald Ford", D:"Bill Clinton", Answer: 2},
            {Q: "How long was the Iranian Hostage Crisis?", A: "Four Months", B:"Six months", C:"A year and a few months", D:"Two years", Answer: 3}
		]},
		{ name: "Hawaii", questions:
		[
            {Q: "How many main islands make up Hawaii?", A: "6", B:"7", C:"8", D:"9", Answer: 3},
            {Q: "What was the attack Pearl Harbor?", A: "A robbery on a harbor made of pearls", B:"Russia bombed Japan", C:"Japanese sneak attack on Pearl Harbor", D:"Chinese invasion of Pacific Islands", Answer: 3},
            {Q: "What is the largest volcano on Earth?", A: "Krakatoa", B:"Mauna Loa", C:"Vesuvius", D:"Pompeii", Answer: 2},
            {Q: "Hawaii was the ____ state admitted to the union?", A: "48th", B:"49th", C:"50th", D:"51st", Answer: 3},
            {Q: "What did Ellery Chun invent?", A: "Hawaiian pizza", B:"Electricity", C:"Tea", D:"The Hawaiian Shirt", Answer: 4},
            {Q: "What year was Pearl Harbor bombed??", A: "1938", B:"1941", C:"1945", D:"1939", Answer: 2}
		]},
		{ name: "Idaho", questions:
		[
            {Q: "What does Idaho mean?", A: "The Sun Comes Down the Mountain", B:"Fertile Earth", C:"A declaration of promiscuous behavior", D:"Land of the Strong Deer", Answer: 1},
            {Q: "What was Henry Blummer before he became an outlaw?", A: "Governor", B:"Sheriff", C:"Railroad Tycoon", D:"General Store Owner", Answer: 2},
            {Q: "What did they nickname the insider informant for Watergate William Mark Felt?", A: "Leaky Damn", B:"Water Shed", C:"Dark Pockets", D:"Deep Throat", Answer: 4},
            {Q: "What planes did Pappy Boyington become famous for shooting down?", A: "German", B:"Japanese", C:"Chinese", D:"Arab", Answer: 2},
            {Q: "What animal is hunted during Predator Hunting Contest and Fur Rendevous?", A: "Bear", B:"Mountain Lion", C:"Wolf and Coyote", D:"Falcons", Answer: 3}
		]},
		{ name: "Illinois", questions:
		[
            {Q: "What is a Chicago Typewriter?", A: "A hot dog", B:"A newspaper", C:"A typewriter", D:"A gun", Answer: 4},
            {Q: "How long did the Chicago fire last?", A: "8 hours", B:"16 hours", C:"2 days", D:"1 week", Answer: 3},
            {Q: "In which city did Playboy start?", A: "Springfield", B:"Chicago", C:"Las Vegas", D:"Naperville", Answer: 2},
            {Q: "Where was the Barack Obama born?", A: "Chicago", B:"Springfield", C:"Newport", D:"Detroit", Answer: 1},
            {Q: "Which is not a nickname for Chicago?", A: "The Windy City", B:"Chi-Town", C:"The Lake City", D:"The City of Big Shoulders", Answer: 3},
            {Q: "Which Great Lake is Chicago located on?", A: "Lake Superior", B:"Lake Erie", C:"Lake Michigan", D:"Lake Huron", Answer: 3}
		]},
		{ name: "Indiana", questions:
		[
            {Q: "How many laps in the Indy 500?", A: "50", B:"150", C:"200", D:"500", Answer: 3},
            {Q: "How did John Dillinger exape Lake Country Jail?", A: "Carving a pistol from a wooden block", B:"Switching places with his wife durng a conjugal", C:"Slipping through the bars", D:"Opening the unlocked door", Answer: 1},
            {Q: "Who did the serial killer Herb Baumeister target?", A: "Young women", B:"Women his age", C:"Gay men his age", D:"Older gay men", Answer: 3},
            {Q: "In Hammond what company power plant exploded?", A: "BP", B:"Griffith Energy", C:"Energetix Inc.", D:"Sourthern Energy Co.", Answer: 4},
            {Q: "When was NASCAR founded?", A: "1856", B:"1894", C:"1921", D:"1948", Answer: 4},
		]},
		{ name: "Iowa", questions: 
		[
            {Q: "What river runs along Iowa?", A: "Mississippi River", B:"Ohio River", C:"Putnam River", D:"Red River", Answer: 1},
            {Q: "What is John Wayne famous for playing?", A: "The Piano", B:"Cowboys", C:"Knights", D:"Soldiers", Answer: 2},
            {Q: "What President is from Iowa?", A: "Gerald Ford", B:"Herbert Hoover", C:"Jimmy Carter", D:"William Howard Taft", Answer: 2},
            {Q: "Who attacked the frontier settlements during the Spirit Lake Massacre?", A: "Cherokee", B:"Shawnee Tribe", C:"Cahto Tribe", D:"Santee Sioux", Answer: 4},
            {Q: "What is the state motto of Iowa?", A: "We shall overcome", B:"Our liberties we prize and our rights we will maintain.", C:"The people rule", D:"In freedom we reign", Answer: 2},
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
            {Q: "What is Kentucky's nickname?", A: "The Bluegrass State", B:"The Henhouse State", C:"Blue Hen State", D:"Garden State", Answer: 1},
            {Q: "What is the Kentucky Tuna's real name?", A: "Salmo Salar", B:"Asian carp", C:"Stillwater Bass", D:"Micropterus Salmoides", Answer: 2},
            {Q: "What did the Silent Brigade or Night Riders fight in?", A: "Black Patch Tobacco Wars", B:"Black Hawk Wars", C:"War of 1812", D:"Civil War", Answer: 1},
            {Q: "What were the Black Patch Tobacco Wars?", A: "A battle beween corporations for market share", B:"A battle between a monopoly and workers", C:"A fight against Tobacco", D:"Pirates trying to steal tobacco", Answer: 2}
		]},
		{ name: "Louisiana", questions:
		[
            {Q: "How much did BP spend cleaning up oil in the Gulf of Mexico in 2010?", A: "$20 Million", B:"$200 Million", C:"$14 Billion", D:"$25 Billion", Answer: 3},
            {Q: "How many people died as a result of Hurricane Katrina?", A: "238", B:"1577", C:"2010", D:"1836", Answer: 4},
            {Q: "What ancient custom is celebrated before 40 days of Lent in New Orleans?", A: "Mardi Gras", B:"Christmas", C:"Thanksgiving", D:"Cinco de Mayo", Answer: 1},
            {Q: "What is the capital of Louisiana?", A: "New Orleans", B:"Baton Rouge", C:"Lafayette", D:"Shreveport", Answer: 2},
            {Q: "Who is the only president to come from Louisiana?", A: "Dwight D Eisenhower", B:"Franklin Pierce", C:"James Buchanan", D:"Zachary Taylor", Answer: 4}
		]},
		{ name: "Maine", questions:
		[
            {Q: "Who helped settle the dispute between Canada and the US over the border of Maine?", A: "Abraham Lincoln", B:"The King of the Netherlands", C:"Charles Lindbergh", D:"Winston Churchill", Answer: 2},
            {Q: "What number state was Maine in the US?", A: "14th", B:"17th", C:"20th", D:"23rd", Answer: 4},
            {Q: "Maine joined the Union in 1820 as a counterbalance to what slave state?", A: "Missouri", B:"Louisiana", C:"Arkansas", D:"Texas", Answer: 1},
            {Q: "95% of the US's supply of what fruit comes from Maine?", A: "Strawberries", B:"Blackberries", C:"Blueberries", D:"Cherries", Answer: 3},
            {Q: "What dining utility was invented in Maine?", A: "Sporks", B:"Toothpicks", C:"Steak Knives", D:"Chopsticks", Answer: 2}
		]},
		{ name: "Maryland", questions:
		[
            {Q: "What is the fine for using spring-loaded trap door traps for crab fishing?", A: "$0", B:"$500", C:"$1,000", D:"$10,000", Answer: 3},
            {Q: "How many Presidents have come from Maryland?", A: "0", B:"1", C:"2", D:"3", Answer: 1},
            {Q: "What state number was Maryland?", A: "1st", B:"3rd", C:"5th", D:"7th", Answer: 4},
            {Q: "In 1844, between Baltimore and Washington, the first ____ was established?", A: "Continental Railroad", B:"Trade route", C:"Telegraph line", D:"Roadway", Answer: 3},
            {Q: "In 1895, what famous athlete was born near Baltimore?", A: "Cy Young", B:"Babe Ruth", C:"Hank Aaron", D:"Lou Gehrig", Answer: 2}
		]},
		{ name: "Massachusets", questions:
		[
            {Q: "Which boat that failed it's voyage with the Mayflower?", A: "Nina", B:"WellSprout", C:"Speedwell", D:"DaisyChain", Answer: 3},
            {Q: "What kind of teas were dumped during the Boston Tea Party?", A: "Green teas only", B:"Black teas only", C:"Green and Black teas", D:"Neither Green nor Black teas", Answer: 3},
            {Q: "What Massachusetts Governor ran for President in 2012?", A: "Donald Trump", B:"Mitt Romney", C:"Hillary Clinton", D:"Barack Obama", Answer: 2},
            {Q: "Four Presidents called Massachusetts their home state. Which of these did not?", A: "John Adams", B:"John F. Kennedy", C:"George HW Bush", D:"Donald Trump", Answer: 4},
            {Q: "When was marijuana legalized in Massachusetts?", A: "2014", B:"2015", C:"2016", D:"It is still illegal in Massachusetts", Answer: 3}
		]},
		{ name: "Michigan", questions:
		[
            {Q: "What year was Ford Motor Company founded?", A: "1876", B:"1887", C:"1903", D:"1924", Answer: 3},
            {Q: "What color(s) were Ford cars avaliable in when first released?", A: "Any color you could think of", B:"Only black and white", C:"Any color, as long as it's black", D:"Red, white, and blue", Answer: 3},
            {Q: "Which president called Michigan his home state?", A: "Herbert Hoover", B:"Teddy Roosevelt", C:"Gerald Ford", D:"Donald Trump", Answer: 3},
            {Q: "Michigan has the longest ____ in the world?", A: "Line at the unemployment office", B:"Freshwater shoreline", C:"Waiting period for adoption", D:"Fishing rod", Answer: 2},
            {Q: "Which is not an official law in Michigan?", A: "It is illegal to kill a dog with a decompression chamber", B:"Cars may not be sold on Sunday", C:"A woman cannot cut her own hair without her husband's permission", D:"You cannot fish after 4pm on Saturdays from March through May", Answer: 4},
            {Q: "Which of the Great Lakes does not border Michigan?", A: "Lake Ontario", B:"Lake Superior", C:"Lake Huron", D:"Lake Erie", Answer: 1}
		]},
		{ name: "Minnesota", questions:
		[
            {Q: "How many sq ft is the Mall of America?", A: "97,300 sq ft", B:"561,000 sq ft", C:"1,230,000 sq ft", D:"4,870,000 sq ft", Answer: 4},
            {Q: "What is the state sport of Minnesota?", A: "Hockey", B:"Curling", C:"Football", D:"Basketball", Answer: 1},
            {Q: "In 1858 Minnesota became what number state in the US?", A: "34th", B:"32nd", C:"30th", D:"28th", Answer: 2},
            {Q: "In 1936, how many days in a row was the temperature below 0 degrees farenheit?", A: "17", B:"26", C:"36", D:"52", Answer: 3},
            {Q: "In 2010, Tom Petters, was fined $3.65 billion and sentenced to 50 years in prision for what?", A: "Assisting suicide over the internet", B:"Voter fraud", C:"Drug Dealing", D:"Growing meth in a basement laboratory", Answer: 1}
		]},
		{ name: "Mississippi", questions: 
		[
            {Q: "Which flag is part of the Mississippi state flag?", A: "The Southern Cross", B:"Betsy Ross Flag", C:"Gadsden Flag", D:"The Stars and Stripes", Answer: 1},
            {Q: "Mississippi is one of 21 states to have what as it's state beverage?", A: "Milk", B:"Water", C:"Beer", D:"Orange Juice", Answer: 1},
            {Q: "How long is the Mississippi River?", A: "About 1900 miles", B:"About 2300 miles", C:"about 2600 miles", D:"about 3100 miles", Answer: 2},
            {Q: "Which President was born in Mississippi?", A: "Harry Truman", B:"Herbert Hoover", C:"Lyndon B. Johnson", D:"Dwight D. Eisenhower", Answer: 1},
            {Q: "Which famous singer is from Mississippi?", A: "Frank Sinatra", B:"Ella Fitzgerald", C:"Nat King Cole", D:"Elvis Presley", Answer: 4}
		]},
		{ name: "Missouri", questions:
		[
            {Q: "What famous botanist was born in Missouri?", A: "George Washington Carver", B:"Gregor Mendel", C:"Charles Lindburg", D:"Frederick Douglass", Answer: 1},
            {Q: "Which direction does the Missouri River flow?", A: "North-West", B:"South-West", C:"North-East", D:"South-East", Answer: 4},
            {Q: "What is the capital of Missouri?", A: "St. Louis", B:"Kansas City", C:"Jefferson City", D:"Springfield", Answer: 3},
            {Q: "What is the famous monument located in St. Louis", A: "The Washington Monument", B:"The Gateway Arch", C:"Stonehenge", D:"The Memorial to the founding fathers", Answer: 2},
            {Q: "What does Missouri mean?", A: "Wooden Canoe People", B:"Standing Rock Folk", C:"River Squatters", D:"Screaming Eagle God", Answer: 1}
		]},
		{ name: "Montana", questions:
		[
            {Q: "Why does the US have trouble controlling its wild horse poputlation?", A: "We don't eat enough horse meat", B:"Horses don't breed quickly enough", C:"Horses move quickly and are hard to count", D:"Wild and tame horses are too similar", Answer: 1},
            {Q: "What huge nature reserve is partially in Montana?", A: "Yellowstone National Park", B:"Paradise Park", C:"Yosemite National Park", D:"Grand Canyon National Park", Answer: 1},
            {Q: "The first woman elected to Congress was from Montana. Who was she?", A: "Marsha Blackburn", B:"Hillary Clinton", C:"Susan B. Anthony", D:"Jeanette Rankin", Answer: 4},
            {Q: "How many total state parks are in Montana?", A: "17", B:"42", C:"51", D:"29", Answer: 2},
            {Q: "What was 'Custer's Last Stand?'", A: "Lt. George A. Custer died of a heart attack in Montana", B:"Lt. George A. Custer died after victory over the last of the Native Indians", C:"Lt. George A. Custer was killed by Sioux and Cheyenne Indians", D:"Lt. George A. Custer was paralyzed after a battle against Indians", Answer: 3}
		]},
		{ name: "Nebraska", questions:
		[
            {Q: "How does fracking work?", A: "Drilling, then using a vaccuum", B:"Inject liquid in to push out material", C:"Dig a well and pump it",D:"When a mommy and daddy love each other...", Answer: 2},
            {Q: "What is the capital of Nebraska?", A: "Lincoln", B:"Omaha", C:"Grand Island", D:"Kearney", Answer: 1},
            {Q: "What is the state insect of Nebraska?", A: "Wasp", B:"Horsefly", C:"Honeybee", D:"Moth", Answer: 3},
            {Q: "The largest ____ is in Nebraska?", A: "Cornfield", B:"Porch Swing", C:"Rubber Tire", D:"Waffle", Answer: 2},
            {Q: "When was the city of Lincoln named?", A: "When Lincoln became president", B:"When Lincoln gave the Gettysburg Address", C:"The day Lincoln was shot", D:"After Lincoln died", Answer: 4}
		]},
		{ name: "Nevada", questions:
		[
            {Q: "How old do you have to be to gamble in Nevada?", A: "16", B:"18", C:"20", D:"21", Answer: 4},
            {Q: "Where are the real pyramids that Las Vegas mimics?", A: "Cairo", B:"Egypt", C:"Mexico", D:"Nigeria", Answer: 2},
            {Q: "Which US president was born in Nevada?", A: "Lyndon Johnson", B:"Jimmy Carter", C:"Gerald Ford", D:"None of the above", Answer: 4},
            {Q: "Nevada has the richest what?", A: "Gold Mines", B:"Silver deposits", C:"Nightlife experience", D:"All of the above within the USA", Answer: 4},
            {Q: "What is the capital of Nevada?", A: "Carson City", B:"Las Vegas", C:"Reno", D:"Henderson", Answer: 1}
		]},
		{ name: "New Hampshire", questions:
		[
            {Q: "What is the New Hampshire Primary", A: "A set of slightly off primary painting colors", B:"A set of laws that set the basis for the US constitution", C:"Islands off the coast used by the coast gaurd", D:"The first of the nationwide primary elections", Answer: 4},
            {Q: "New Hampshire was the first state to do what?", A: "Have a citizen elected as President", B:"Declare independence from England", C:"Ban the growing of tobacco", D:"Allow domesticated animals as pets", Answer: 2},
            {Q: "The first of what crop in the US was planted in New Hampshire?", A: "Corn", B:"Wheat", C:"Carrot", D:"Potato", Answer: 4},
            {Q: "What is the capital of New Hampshire?", A: "Concord", B:"Lexington", C:"Manchester", D:"Nashua", Answer: 1},
            {Q: "What number state was New Hampshire to join the US?", A: "1st", B:"2nd", C:"9th", D:"10th", Answer: 3}
		]},
		{ name: "New Jersey", questions:
		[
            {Q: "What is on the New Jersey license plate?", A: 'A picture of a beach with the words "Liberty and Prosperity"', B:'The words "Liberty and Prosperity"', C:"A picture of a bustling Dock", D:'The words "Garden State"', Answer: 4},
            {Q: "Which famous singer was born in New Jersey?", A: "Frank Sinatra", B:"Elvis Presley", C:"Michael Jackson", D:"Kurt Cobain", Answer: 1},
            {Q: "What is stolen more in New Jersey than any other state?", A: "Money", B:"Purses", C:"Cars", D:"Food", Answer: 3},
            {Q: "What does New Jersey have more of than any other state?", A: "Diners", B:"Banks", C:"Beaches", D:"Drive in theaters", Answer: 1},
            {Q: "Which president is a New Jersey native?", A: "Grover Cleveland", B:"Donald Trump", C:"Thomas Jefferson", D:"Richard Nixon", Answer: 1}
		]},
		{ name: "New Mexico", questions:
		[
            {Q: "What was NOT prohibition?", A: "The sale of alhohol was illegal", B:"The production of alchohol was illegal", C:"The importation of alchohol was illegal", D:"The consumption of alchohol was made illegal", Answer: 4},
            {Q: "What is the capital of New Mexico?", A: "Santa Fe", B:"Albuquerque", C:"Las Cruces", D:"Taos", Answer: 1},
            {Q: "Why is it called New Mexico?", A: "USA hoped to eventually purchase Mexcio and merge the two", B:"They seceded from Mexico before being purchased by the USA", C:"It was named by the Spanish after Mexico was established", D:"Nobody could think of a better name", Answer: 3},
            {Q: "How many lbs of cocaine were seized in the 2016 drug tunnel discovery?", A: "about 2000lbs", B:"about 2250lbs", C:"about 5400lbs", D:"about 700lbs", Answer: 2},
            {Q: "What 3rd party candidate ran from New Mexico in the 2016 election?", A: "Timothy Kraft", B:"Ed Foreman", C:"Steve Pearce", D:"Gary Johnson", Answer: 4}
		]},
		{ name: "New York", questions:
		[
            {Q: "How many Presidents were born in New York state?", A: "3", B:"4", C:"5", D:"6", Answer: 3},
            {Q: "What year did France give the US the Statue of Liberty?", A: "1776", B:"1796", C:"1886", D:"1872", Answer: 3},
            {Q: "What waterway runs from Lake Erie to the Atlantic Ocean?", A: "The Hudson River", B:"The St. Lawrence River", C:"The Canada Waterway", D:"The Erie Canal", Answer: 4},
            {Q: "What is the 2nd most populated city in New York?", A: "New York City", B:"Buffalo", C:"Albany", D:"Syracuse", Answer: 2},
            {Q: "Which World Wonder is part of New York State?", A: "The Finger Lakes", B:"The World Trade Center", C:"Niagara Falls", D:"The Appalachian Mountains", Answer: 3},
            {Q: "Stop and Frisk was declared unconstitutional in New York City because of what?", A: "Police discriminated with who they stopped", B:"It was an invasion of privacy", C:"It was sexual harassment", D:"They didn't find criminals any easier than before", Answer: 1}
		]},                                        
		{ name: "North Carolina", questions:
		[
            {Q: "How much horse power did the Wright Brothers plane engine have?", A: "4", B:"6", C:"12", D:"16", Answer: 3},
            {Q: "What is the capital of North Carolina?", A: "Charlotte", B:"Greensboro", C:"Durham", D:"Raleigh", Answer: 4},
            {Q: "What was the slogan of North Carolina courtesy of the Wright brothers?", A: "'Tar Heels'", B:"'Stronger together'", C:"'First in Flight'", D:"'Fight or Flight'", Answer: 3},
            {Q: "What important invention came from North Carolina in the early 1900s", A: "The Airplane", B:"The Automobile", C:"The Light Bulb", D:"The Assault Rifle", Answer: 1},
            {Q: "The 20 largest of what gem were found in North Carolina?", A: "Ruby", B:"Emerald", C:"Diamond", D:"Onyx", Answer: 2}
		]},
		{ name: "North Dakota", questions:
		[
            {Q: "What has become controversial in North Dakota recently?", A: "An oil pipeline", B:"A Railway", C:"New Apple Products", D: "Comicon Characters", Answer: 1},
            {Q: "North Dakota passed a bill in 1987 making what their official state language?", A: "English", B:"French", C:"Spanish", D:"Russian", Answer: 1},
            {Q: "North Dakota is not bordered by which of the following states?", A: "South Dakota", B:"Wisconsin", C:"Montana", D:"Wyoming", Answer: 4},
            {Q: "What is the state beverage of North Dakota?", A: "Water", B:"Coca-Cola", C:"Milk", D:"Orange Juice", Answer: 3},
            {Q: "Where does the name Dakota come from?", A: "An Indian tribe", B:"A girl who lived on the land", C:"It was made up on the spot", D:"South Dakota was already around, so they named it North Dakota", Answer: 1}
		]},
		{ name: "Ohio", questions:
		[
            {Q: "What is the HeartBeat bill in Ohio about specificly?", A: "Organ Doners", B:"Brain Dead Patients", C:"Abortions", D:"Fighting Heart Disease", Answer: 3},
            {Q: "What was the biggest spread news from Ohio in 2016?", A: "Cleveland Cavaliers win first championship", B:"Cleveland Indians blow a 3-1 lead in the World Series", C:"The death of Harambe", D:"None of the above", Answer: 3},
<<<<<<< HEAD
            {Q: "How many presidents were born in Ohio", A: "4", B:"5", C:"6", D:"7", Answer: 4},
            {Q: "Which Ohio city was the first to use police cars?", A: "Columbus", B:"Cleveland", C:"Cincinatti", D:"Akron", Answer: 4},
            {Q: "What famous African American athlete grew up in Cleveland?", A: "Jackie Robinson", B:"Jesse Owens", C:"Michael Jordon", D:"Barry Sanders", Answer: 2}
=======
            {Q: "How many Presidents were born in Ohio?", A: "4", B:"5", C:"6", D:"7", Answer: 4},
            {Q: "Which Ohio city was the first to use police cars?", A: "Columbus", B:"Cleveland", C:"Cinncinati", D:"Akron", Answer: 4},
            {Q: "What famous African American athlete grew up in Cleveland?", A: "Jackie Robinson", B:"Jessee Owens", C:"Michael Jordon", D:"Barry Sanders", Answer: 2},
            {Q: "What is the state nickname of Ohio?", A: "The Sooner State", B:"The Buckeye State", C:"The Empire State", D:"The Keystone State", Answer: 2}
>>>>>>> origin/master
		]},
		{ name: "Oklahoma", questions:
		[
            {Q: "What was the target of the Oklahoma City bombing?", A: "The Feds", B:"A Religion", C:"A Labratory", D:"The Police", Answer: 1},
            {Q: "What was the state of Oklahoma originally for?", A: "Slave trading", B:"Native Indian Reservations", C:"Gold mining", D:"Land to trade with Spain", Answer: 2},
            {Q: "What makes up about 75% of Oklahoma?", A: "Manufacturing factories", B:"Swamps", C:"Lakes", D:"Farmland", Answer: 4},
            {Q: "What is the state bird of Oklahoma?", A: "Scissor-tailed flycatcher", B:"Northern Mockingbird", C:"Western Meadowlark", D:"Crow", Answer: 1},
            {Q: "In 1990 Oklahoma was the first state to do what?", A: "Approve of gay marriage", B:"Limit terms of legislators", C:"Declare war on Mexico", D:"Ban keeping alligators as pets", Answer: 2}
		]},
		{ name: "Oregon", questions:
		[
            {Q: "When did Gold prices hit their peak in the last 30 years?", A: "1996", B:"2008", C:"2012", D:"2016", Answer: 3},
            {Q: "What is the Oregon Trail?", A: "A hiking path in Oregon", B:"A long trail used by fur traders in the early 1800s", C:"A flavor of trail mix", D:"A trading route within the state of Oregon", Answer: 2},
            {Q: "What is the state nut of Oregon?", A: "Hazelnut", B:"Macadamia", C:"Almond", D:"Peanut", Answer: 1},
            {Q: "What is the 8000 foot deep canyon in Oregon?", A: "Hells Canyon", B:"The Grand Canyon", C:"The Pacific Rim", D:"The Valley of Death", Answer: 1},
            {Q: "How many former presidents are from Oregon?", A: "3", B:"2", C:"1", D:"0", Answer: 4}
		]},
		{ name: "Pennsylvania", questions:
		[
            {Q: "When was the Declaration of Independence voted on?", A: "May 28, 1776", B:"July 2, 1776", C:"July 4, 1776", D:"January 3, 1776", Answer: 2},
            {Q: "Where was the Liberty Bell originally made?", A: "Philladelphia", B:"New York", C:"London", D:"Paris", Answer: 3},
            {Q: "When was the Liberty Bell made?", A: "1776", B:"1751", C:"1765", D:"1742", Answer: 2},
            {Q: "Philadelphia, city of _____?", A: "Brotherly Love", B:"Good Neighbors", C:"Roses", D:"Buillies", Answer: 1},
            {Q: "Who is the athlete who has a statue at the Art Museum Steps in Philadelphia?", A: "Muhammad Ali", B:"Michael Jordan", C:"Mike Piazza", D:"Rocky Balboa", Answer: 4},
        ]},
		{ name: "Rhode Island", questions:
		[
            {Q: "What is the next smallest state after Rhode Island?", A: "Arizona", B:"Nevada", C:"Colorado", D:"Delaware", Answer: 4},
            {Q: "What number state was Rhode Island?", A: "1st", B:"4th", C:"7th", D:"13th", Answer: 4},
            {Q: "What is the capital of Rhode Island?", A: "Providence", B:"Albany", C:"Atlantic City", D:"Hartford", Answer: 1},
            {Q: "What is the main area of production in Rhode Island?", A: "Metals", B:"Military Weapons", C:"Agriculture", D:"Gold", Answer: 3},
            {Q: "What is the state bird of Rhode Island?", A: "Rhode Island Red", B:"Rhode Island Blue", C:"Rhode Island Yellow", D:"Rhode Island Green", Answer: 1},
		]},
		{ name: "South Carolina", questions:
		[
            {Q: "What is true about Super PACs?", A: "They can raise unlimited money", B:"They can coordinate with parties", C:"They cannot raise money from unions", D:"They do not have to disclose donors", Answer: 1},
            {Q: "What state number was South Carolina?", A: "7th", B:"8th", C:"9th", D:"10th", Answer: 2},
            {Q: "South Carolina was the first state to do what?", A: "Abolish slavery", B:"Legalize marijuana", C:"Approve of gay marriage", D:"Ratify the Articles of Confederation", Answer: 4},
            {Q: "What is the capital of South Carolina?", A: "Charleston", B:"Columbia", C:"Greenville", D:"Myrtle Beach", Answer: 2},
            {Q: "What important Civil War event happened at Fort Sumter?", A: "Gold was discovered", B:"The confederacy surrendered", C:"The first battle took place", D:"The Union won the war", Answer: 3},
		]},
		{ name: "South Dakota", questions:
		[
            {Q: "What is the least amount of electoral votes a state can have?", A: "1", B:"2", C:"3", D:"4", Answer: 3},
            {Q: "What is Mount Rushmore?", A: "The tallest mountain in the US", B:"A 2000 year old dormant volcanoe", C:"A theme park", D:"A mountain with the faces of 4 former presidents", Answer: 4},
            {Q: "Which of the following former presidents is not on Mt. Rushmore", A: "George Washingon", B:"Thomas Jefferson", C:"John Adams", D:"Theodore Roosevelt", Answer: 3},
            {Q: "What is the Dakota Access Pipeline?", A: "An unfinished oil pipeline that would make oil transportation easier", B:"A pipeline traveling through Native American land", C:"The nickname for South Dakota's subway", D:"The water pipes that connect all of South Dakota", Answer: 1},
            {Q: "What state number was South Dakota?", A: "29th", B:"23rd", C:"47th", D:"40th", Answer: 1},
		]},
		{ name: "Tennessee", questions:
		[
            {Q: "What event made Tennessee 'The Volunteer State'?", A: "The Alamo", B:"The Revolutonary War", C:"The Civil War", D:"The War of 1812", Answer: 1},
            {Q: "Are you from Tennessee?", A: "Yes", B:"No", C:"Because you're the only 10 I see", D:"None of the above", Answer: 3},
            {Q: "Which was NOT invented in Tennessee?", A: "Cotton Candy", B:"French Fries", C:"Atomic Bomb", D:"Mountain Dew", Answer: 2},
            {Q: "What is Nashville known for?", A: "Southern hospitality", B:"Music", C:"Cornbread", D:"Horse racing", Answer: 2},
            {Q: "Which former President is NOT from Tennessee?", A: "Andrew Jackson", B:"Andrew Johnson", C:"James K. Polk", D:"Andrew Garfield", Answer: 4},
		]},
		{ name: "Texas", questions:
		[
            {Q: "What is Gerrymandering?", A: "Talking non-stop so a vote can't be held", B:"Purposely wasting govt. money", C:"Interrupting a speech", D:"Splitting up the vote areas to ensure your own victory", Answer: 4},
            {Q: "Who is Chris Kyle?", A: "Religious Leader", B:"Hero Cop", C:"American Sniper", D:"A terrorist", Answer: 3},
            {Q: "What was the Alamo?", A: "A Mexican assault that killed many Texans", B:"A temple in Mexico where many died", C:"A Mexican city that was burned to the ground by Texans", D:"The old capital city of Texas", Answer: 1},
            {Q: "What is the state sport of Texas?", A: "Bull Riding", B:"Football", C:"Baseball", D:"Rodeo", Answer: 2},
            {Q: "How big is the King Ranch in Texas?", A: "Bigger than Yellowstone", B:"Bigger than Japan", C:"Bigger than New Jersey", D:"Bigger than Rhode Island", Answer: 4},
            {Q: "What was the result of Rowe v Wade?", A: "Abortions are banned in Texas", B:"Laws that ban abortions are ruled unconstitutional", C:"Abortions are only permitted if they will save the mother from harm", D:"Nothing changed", Answer: 2},
            {Q: "What did a Texas man yell before jumping into an Alligator pit and being eaten?", A: "Goodbye cruel world!", B:"F*ck that Alligator!", C:"Relax, we go way back.", D:"I hate my life!", Answer: 2}
		]},
		{ name: "Utah", questions:
		[
            {Q: "What did Joe Hill die for?", A: "State Rights", B:"Workers Rights", C:"Communism", D:"God", Answer: 2},
            {Q: "What was granted in Utah in 1870, only to be revoked by Congress in 1887?", A: "Women's right to vote", B:"Gold digging licenses", C:"Right to own slaves", D:"Right for colored people to vote", Answer: 1},
            {Q: "What caused livestock to die, as well as many people in the 1950s in Utah?", A: "Famine", B:"Disease", C:"Nuclear weapons fallout", D:"War", Answer: 3},
            {Q: "What happened September 11th, 1857 in Utah?", A: "The Mountain Meadows Massacre", B:"Women gained the right to vote", C:"Slavery was prohibited", D:"Nuclear Weapons were tested on Salt Lake City", Answer: 1},
            {Q: "What is the capital of Utah?", A: "Ogden", B:"Provo", C:"St. George", D:"Salt Lake City", Answer: 4},
		]},
		{ name: "Vermont", questions:
		[
            {Q: "What did anti-trust laws do to the computer industry?", A: "It prevented internet providers from working together to raise prices", B:"Windows and Intel were split up", C:"Apple was forced into Chinese factories", D:"IBM was forced to unbundle software and hardware", Answer: 4},
            {Q: "Who was the most recent Presidential candidate from Vermont?", A: "John McCain", B:"Bernie Sanders", C:"Ted Cruz", D:"Jill Stein", Answer: 2},
            {Q: "How many presidents were born in Vermont?", A: "0", B:"1", C:"2", D:"3", Answer: 3},
            {Q: "What is the capital of Vermont?", A: "Montpelier", B:"Burlington", C:"Brattleboro", D:"Middlebury", Answer: 1},
            {Q: "What number state was Vermont?", A: "12th", B:"3rd", C:"15th", D:"14th", Answer: 4},
		]},
		{ name: "Virginia", questions:
		[
            {Q: "Why did Virginia hold the nations capital?", A: "It was one of the biggest cities", B:"The first courthouse was built here", C:"So the south would not secede", D:"It would be easy to defend", Answer: 3},
            {Q: "Who was the first president from Virginia?", A: "Thomas Jefferson", B:"George Washington", C:"John Adams", D:"Herbert Hoover", Answer: 2},
            {Q: "How many presidents were born in Virginia?", A: "3", B:"4", C:"5", D:"6", Answer: 3},
            {Q: "Loving v Virginia in 1967 did what?", A: "Freed slaves in Virginia", B:"Allowed for interracial marriage", C:"Allowed colored people to play in the NBA", D:"Ended lynching of colored people", Answer: 2},
            {Q: "What is the capital of Virginia?", A: "Virginia Beach", B:"Norfolk", C:"Alexandria", D:"Richmond", Answer: 4}
		]},
		{ name: "Washington", questions:
		[
            {Q: "What was the first passenger jet engine?", A: "Airbus A300", B:"Dewoitine D.30", C:"Ford Trimotor", D:"Boeing 707", Answer: 4},
            {Q: "Washington is the only state to what?", A: "Be named after a President", B:"Have over 10 inches of rainfall in one day", C:"Have two volcanoes within state borders", D:"Border Canada", Answer: 1},
            {Q: "What is the state fruit of Washington?", A: "Orange", B:"Apple", C:"Grape", D:"Starfruit", Answer: 2},
            {Q: "The city of Seattle is known best for what?", A: "Fish", B:"Basketball", C:"Rain", D:"Football", Answer: 3},
            {Q: "What is the state slogan of Washington?", A: "'The Golden State'", B:"'The Garden State'", C:"'The Capital State'", D:"'The Evergreen State'", Answer: 4}
		]},
		{ name: "West Virginia", questions:
		[
            {Q: "Why is West Virgnia different from Virginia?", A: "They seceded based off of state law", B:"West Virginia was puchased from the french", C:"Split apart during the Civil War", D:"There was a vote held on immigration", Answer: 3},
            {Q: "When was the last election that West Virginia voted Democrat?", A: "1992", B:"1996", C:"2000", D:"2008", Answer: 2},
            {Q: "Which is not a city in West Virginia?", A: "Morgantown", B:"Charleston", C:"Huntington", D:"Norfolk", Answer: 4},
            {Q: "What number state was West Virginia?", A: "35th", B:"12th", C:"14th", D:"21st", Answer: 1},
            {Q: "Which holiday was first observed in West Virginia?", A: "Father's day", B:"Mother's day", C:"Easter", D:"Thanskgiving", Answer: 2}
		]},
		{ name: "Wisconsin", questions:
		[
            {Q: "Who fought against the US in the Battle of Wisconsin Heights?", A: "Confederates", B:"British", C:"Canadians", D:"Native Americans", Answer: 4},
            {Q: "Why are people from Wisconsin called Cheeseheads?", A: "Chicago White Sox fans made it up as an insult", B:"They are mostly cheese farmers", C:"Their founder wore cheese as a hat", D:"They are all rich, cheese is slang for money", Answer: 1},
            {Q: "What attracted settlers to Wisconsin in the 1820s?", A: "Safety from the war", B:"Freedom from slavery", C:"High lead prices", D:"Gold", Answer: 3},
            {Q: "How many presidents and vice-presidents were born in Wisconsin?", A: "11", B:"4", C:"8", D:"0", Answer: 4},
            {Q: "What did the Supreme Court ruling of Democrats v. Wisconsin in 1980 do?", A: "Force Republican candidates to resign", B:"Call for a recount in the election", C:"Only allow registered Democrats to vote in primaries for Democrats", D:"Nothing, the Democrats lost", Answer: 3}
		]},
		{ name: "Wyoming", questions:
		[
            {Q: "Who declared Yellowstone a national park?", A: "Franklin D. Roosevelt", B:"Richard M. Nixon", C:"Ulysses S. Grant", D:"Howard Taft", Answer: 1},
            {Q: "What is the state mammal of Wyoming?", A: "Rhino", B:"Bison", C:"Human", D:"Gorilla", Answer: 2},
            {Q: "Which state DOES NOT border Wyoming?", A: "Colorado", B:"Utah", C:"Kansas", D:"South Dakota", Answer: 3},
            {Q: "What number state was Wyoming when added to the US?", A: "41st", B:"43rd", C:"44th", D:"46th", Answer: 3},
            {Q: "Which former Vice President was raised in Wyoming?", A: "Joe Biden", B:"Al Gore", C:"Hubert Humphrey", D:"Dick Cheney", Answer: 4}
		]},
		{ name: "DoC", questions:
		[
            {Q: "What was the Bay of Pigs?", A: "Long Strech of Coastal Farms", B:"North Korea bombed Pearl Harbor", C:"Invasion of Normandy", D:"CIA invading Cuba", Answer: 4},
            {Q: "What country does President Trump want to block with a wall?", A: "China", B:"Mexico", C:"North Korea", D:"Canada", Answer: 2},
            {Q: "Which former Presidential candidate was under FBI investigation twice?", A: "Bill Clinton", B:"Donald Trump", C:"Hillary Clinton", D:"Ronald Raegan", Answer: 3},
            {Q: "What is the recognized birthday of America?", A: "July 4th, 1776", B:"July 5th, 1776", C:"July 4th, 1767", D:"July 5th, 1767", Answer: 1},
            {Q: "Who was the 1st President of the United States?", A: "Ben Franklin", B:"Abraham Lincoln", C:"John Q. Adams", D:"George Washington", Answer: 4},
            {Q: "Which of these Governmental agencies is located in the District of Columbia", A: "NASA Langley Research Center", B:"TSA Headquarters", C:"FBI Headquarters", D:"CIA Headquarters", Answer: 3}
        ]}
    ]
};