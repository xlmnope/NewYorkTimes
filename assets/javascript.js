
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
      var results = result.response.docs;
      for (var i=0; i<results.length; i++){
        var doc = results[i];
        var articleDiv = $("<div>").html(doc.web_url);
        articleDiv.appendTo($(".searchResults")) 
      }
    }).fail(function(err) {
  throw err;
    });

 
})

$("#clearResultsButton").on ("click", function () {
  $(".param").text("")
})

