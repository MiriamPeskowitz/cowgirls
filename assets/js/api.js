
//change for API, which we'll do next wednesday 
//takes 2: url, method: 
//endpoint and parameters


var backgroundColor = [
	'red',
	'color',
	'blue',
	'purple',
	'orange'
];
var endpoint = ;;;
var params = ''

$.ajax({
	url: 'endpoint + params',
	method: 'GET',
	dataType: 'jsonp'
})
//all we need is data an array 
.done(function (data) {
	var quotes = [];
	for(var i= 0; i < data.statuseslength; i++){
	quotes.push(data.statuses[i].text);
	}
})
.fail(function (err));
//promises. google it. 
//create things dynamically 



var quotes = [
	"quote 1", "quote2", "quote3", "quote4", "quote5"
];
//counting starts at 0
//need a number to access what's inside 

//quotes[2]

//quotes[Math.random()]
//var num = Math.random();

//pass a decimal, it will round it for you. 
//Math.floor(2);
//var num = Math.floor(Math.random() * 4)
var num = Math.floor(Math.random() * quotes.length);

//console.log(quotes.length);//use this to learn how long the array is, go for that -1
//

var randomQuotes = quotes[num];

var color = backgroundColor[num];

var content = $("<p>");

	content.html(randomQuotes);

	content.attr({
		"class":"quotes",
		"data-name":"esterlin"
	});

$("#result").append(content);

//put the quote into the html 
//set a click button
$("#random").on('click',function(){
	//mouseenter, hover, whatever, drag
	//have to move these two lines here so they'll run every time the button is clicke,d otherwise, above, they'll only run when the page loads
//when we press, it will also update the global 
	num = Math.floor(Math.random() * 4);
	randomQuotes = quotes[num];
	var color = backgroundColor[num]; 
	$("#body").css('background', 'color');
	content.empty();
	content.append(randomQuotes);
	//
});
