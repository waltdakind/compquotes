

//api route for the quote 
var api = 'http://quotes.stormconsultancy.co.uk/random.json/';
//the ajax call function
function newQuote(){
$.ajax({
  url: api,
  dataType: "jsonp",
  crossDomain: true,
  success: function (data) {
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
//end tweet quote
}
//end ajax
});
}

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

