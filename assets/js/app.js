

//api route for the quote 
var api = 'https://quotes.stormconsultancy.co.uk/random.json/';
//the ajax call function
function newQuote(){
$.get( api, function( data ) {
	console.log(data.quote);
$('#randomQuote').html(data.quote);	
    console.log(data.author);
$('#randomAuthor').html(data.author);
});	
}


//on doc ready have a quote/author loaded 
$(function(){

   //load initial quote
newQuote();
//on click make ajax call for a new quote/author
$( "button" ).click(function() {
  console.log('button clicked');
 newQuote(); 
});
});

