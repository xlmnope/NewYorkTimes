
$("#searchButton").on("click", function() {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
  'api-key': "1da6229a63ed45acb68a2e33ea027098"
    });
    $.ajax({
     url: url,
     method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
  throw err;
    });

var results = result.data;
for (var i=0; i<results.length; i++){
  var articleDiv = $("<div>");
  articleDiv.append ($(".searchResults"))  
}})

$("#clearResultsButton").on ("click", function () {
  $(".param").text("")
})

