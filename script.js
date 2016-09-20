
$.ajax({
 url: "http://www.omdbapi.com/?t=hocus+pocus&y=&plot=short&r=json",
 dataType: "jsonp",
 success: function(response) {
  var movieTitle = response.Title;
  var moviePlot = response.Plot;
  $('#hocus-pocus .back').text(movieTitle);
  $('#hocus-pocus .front').text(moviePlot);
  $('#hocus-pocus').flip();
 }
});
