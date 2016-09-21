
$.ajax({
 url: "http://www.omdbapi.com/?t=hocus+pocus&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#hocus-pocus .back').text('What is ' + movieTitle + ' ?');
  $('#hocus-pocus .front').text(moviePlot);
  $('#hocus-pocus').flip();
 }
});


$.ajax({
 url: "http://www.omdbapi.com/?t=halloween&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#halloween .back').text('What is ' + movieTitle + ' ?');
  $('#halloween .front').text(moviePlot);
  $('#halloween').flip();
 }
});

$.ajax({
 url: "http://www.omdbapi.com/?t=the+nightmare+before+christmas&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#nightmare-christmas .back').text('What is ' + movieTitle + ' ?');
  $('#nightmare-christmas .front').text(moviePlot);
  $('#nightmare-christmas').flip();
 }
});

$.ajax({
 url: "http://www.omdbapi.com/?t=casper&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#casper .back').text('What is ' + movieTitle + ' ?');
  $('#casper .front').text(moviePlot);
  $('#casper').flip();
 }
});

$.ajax({
 url: "http://www.omdbapi.com/?t=dracula&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#dracula .back').text('What is ' + movieTitle + ' ?');
  $('#dracula .front').text(moviePlot);
  $('#dracula').flip();
 }
});

$.ajax({
 url: "http://www.omdbapi.com/?t=monster+house&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#monster .back').text('What is ' + movieTitle + ' ?');
  $('#monster .front').text(moviePlot);
  $('#monster').flip();
 }
});