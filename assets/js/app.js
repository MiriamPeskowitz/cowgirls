//add more quotes: up to 25, and then add more colors to match. 
//add a starting color. ALso, clean up the middle section. 
// sample: https://codepen.io/Pyremell/pen/eZGGXX
var backgroundColor = [
	'paleVioletRed',
	'paleGoldenrod',
	'saddleBrown',
	'lightSteelBlue',
	'lavender'
];

var quotes = [
	"Feeling down? Saddle up.",
	"Because when I ride, all I feel is free.", 
	"If you don’t like the road you’re walking, start paving another one.", 
	"Always saddle your own horse.", 
	"Cowgirl is a spirit, a special brand of courage. The cowgirl faces life head on, lives by her own lights, and makes no excuses. Cowgirls take stands. They speak up. They defend the things they hold dear. A cowgirl might be a rancher, or a barrel racer, or a bull rider, or an actress. But she's just as likely to be a checker at the local Winn Dixie, a full-time mother, a banker, an attorney, or an astronaut."
];
//counting starts at 0
//need a number to access what's inside 

//quotes[2]

//quotes[Math.random()]
//var num = Math.random();

//pass a decimal, it will round it for you. 
//Math.floor(2);
//var num = Math.floor(Math.random() * 4)
var num = Math.floor(Math.random() * 4);

//console.log(quotes.length);//use this to learn how long the array is, go for that -1
//

var randomQuotes = quotes[num];

var color = backgroundColor[num];

var content = $("<p>");

	content.html(randomQuotes);

	content.attr({
		"class":"quotes",
		
	});

$(".result").append(content);

//put the quote into the html 
//set a click button
function changeQuoteAndColor() {
	//mouseenter, hover, whatever, drag
	//have to move these two lines here so they'll run every time the button is clicke,d otherwise, above, they'll only run when the page loads
//when we press, it will also update the global 
	num = Math.floor(Math.random() * 4);

	randomQuotes = quotes[num];

	color = backgroundColor[num]; 

	$("body").css('background-color', color);

	content.empty();
	content.append(randomQuotes);
	//
};

$("#random").on('click',rollDice());
$("random").on('click', changeQuoteAndColor)



//

function rollDice() {
//get #, make box, push to page; 
	var diceNum = Math.floor(Math.random() * 6)+ 1;
		var yourRoll = diceNum.toString();
		return yourRoll;

	var box = $("<div>");
		box.html(yourRoll);
		box.css({
			"height": "50px",
			"width": "50px",
			"font-size": "14px",
			"font-color": "black", 
			"border": "1px solid black",
			"display":"flex"

		})

		$("body").append(box);

	}	
	
//get a random number, return it, dynamically make a div with ht and width' 

		

	


//to do it as API, the data will be different. 

//need to remove the old quote use empty()

//setTimeOut()

//append,html,attr
//on method takes string and function
//I'm kind of getting 
//console.log(window.object)  do this to see the long list of things you can  put into the () of on 

