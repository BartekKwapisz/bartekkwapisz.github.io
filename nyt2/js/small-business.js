// default values:
var endDate = "20170628";
var beginDate = "20170627";
var hits = 10;
var round = 0;
var page = 0;
var articlesPerSite = 10;

// first a user picks dates
$( "#date-from" ).datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange:"1851:2017",
  dateFormat: 'yy-mm-dd'
});
$( "#date-to" ).datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange:"1851:2017",
  dateFormat: 'yy-mm-dd'
});

// then a user clicks "Get articles!" button
$('body').on('click', '#get-articles-with-dates', processArticles);
function processArticles() {
  var dateFrom = $("#date-from").val();
  var dateTo = $("#date-to").val();
  if(new Date(dateFrom) > new Date(dateTo)) alert('Second date is earlier than first!');
  beginDate = dateFrom.replace(/-/g,'');
  endDate = dateTo.replace(/-/g,'');
  getNYT(beginDate, endDate);
}

// then we get all articles from selected dates
function getNYT(beginDate, endDate){
  articlesPerSite = Math.round10($("#articles-per-site").val(),1);
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "b178045f3ef64c798a1233df118e039e",
    'begin_date': beginDate,
    'end_date': endDate,
    'page': page
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    hits = result.response.meta.hits/articlesPerSite;
    createArticles();
    for (var i = 0; i < 10; i++) {
      $('#heading' + (round+i)).html(result.response.docs[''+i].headline.main);
      $('#paragraph' + (round+i)).html(result.response.docs[''+i].snippet);
      $('#span' + (round+i)).html(result.response.docs[''+i].pub_date.slice(0,10));
      $('#anchor' + (round+i)).attr("href", result.response.docs[''+i].web_url);
    }
    setTimeout(anotherNYT, 1000);
  }).fail(function(err) {
    throw err;
  });
}

// if more than 10 articles per site were selected we start another NYT API search - that's a workaround to 10 articles per search limit
function anotherNYT() {
  page++;
  round += 10;
  if(round < articlesPerSite) {
   getNYT(beginDate, endDate);
 } else {
   createPagination();
 }
}

// create articles so we can insert NYT API data into them
function createArticles() {
  for(var i = round; i < round+10; i++) {
      $('#articles-container').append(
        '<div class="col-md-4" id="articleNumber'+i+'"><h2 id="heading'+i+'">Incorrect dates</h2><p id="paragraph'+i+'">"From date" is after "To date". Fix it to get proper results.</p><span id="span'+i+'" class="label label-default"></span><br /><a id="anchor'+i+'" class="btn btn-default" href="#" target="_blank">Show full article</a></div>'
      );
  }
  var divs = $('#articles-container > div');
  for(var j = 0; j < divs.length; j+=3) {
    divs.slice(j, j+3).wrapAll('<div class="row"></div>');
  }
}

// when articles per site limit has been reached we create pagination to enable checking other articles from dates scope
function createPagination() {
  $('#pagination').append(
    '<p>Choose other articles from selected dates:</p>'
  );
  for(var i = 1; i < hits; i++) {
    if( i < 121 ) { //From NYT API:Pagination beyond page 120 is not allowed at this time.
      $('#pagination').append(
        '<li class="page-item"><a class="page-link" href="#" data-toggle="tooltip" data-placement="top" title="">'+i+'</a></li>'
      );
    }
  }
}

// when pagination is clicked we make another NYT API search, this time with articles from page equal selected pagination number
$('body').on('click', '.page-link', paginationStartsNYT);
function paginationStartsNYT() {
  page = this.innerHTML;
  $('#articles-container').empty();
  $('#pagination').empty();
  getNYT(beginDate, endDate);
}

// go to site top or bottom navigation
$('body').on('click', '#top', function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
$('body').on('click', '#bottom', function(){
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

//rounding numbers to dividend of 10 (without a reminder)
(function() { /* taken from developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round */
  function decimalAdjust(type, value, exp) {
    value = +value;
    if(value < 10) {
      value = 10;
    }
    if(value > 100) {
      value = 100;
    }
    exp = +exp;
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
})();

/*
Issues:
- line 124 "Pagination beyond page 120 is not allowed at this time." - that disables searching through all articles from selected dates
- limitation of articles per site to multiple of 10; that's due to flawed application logic, it's inconsistent with page 3 columns layout
- pagination should inlude a tooltip that would indicate articles' date
*/
