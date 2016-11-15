

//api route for the quote 
var api = 'http://quotes.stormconsultancy.co.uk/random.json/';
//the ajax call function
function newQuote(){
$.get( api, function( data ) {
	console.log(data.quote);
$('#randomQuote').html(data.quote);	
    console.log(data.author);
$('#randomAuthor').html(data.author);
twttr.widgets.createShareButton(
  '/',
  document.getElementById('quoteTweet'),
  {
    text: '"' + data.quote + '"' + ' - ' + data.author
  }
);


});	
}

//https://twitter.com/intent/tweet?hashtags=quotes%2C%20programming&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Why%20you%20no%20update%3F&tw_p=tweetbutton&url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&via=twitterdev
//on doc ready have a quote/author loaded 
$(function(){

   //load initial quote
newQuote();
//on click make ajax call for a new quote/author
$( "button" ).click(function() {
  console.log('button clicked');
  $('#quoteTweet').empty();
 newQuote(); 
});
});

