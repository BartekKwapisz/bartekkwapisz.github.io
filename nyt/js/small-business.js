var lastDaysMonthsYears = 1;
var currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() - lastDaysMonthsYears);
var endDate = new Date().toJSON().slice(0,10).replace(/-/g,'');
var beginDate = currentDate.toJSON().slice(0,10).replace(/-/g,'');

function getNYT(beginDate, endDate){
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "b178045f3ef64c798a1233df118e039e",
    'begin_date': beginDate,
    'end_date': endDate
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    for (var i = 0; i < 10; i++) {
      $('#heading' + i).html(result.response.docs[''+i].headline.main);
      $('#paragraph' + i).html(result.response.docs[''+i].snippet);
      $('#span' + i).html(result.response.docs[''+i].pub_date.slice(0,10));
      $('#anchor' + i).attr("href", result.response.docs[''+i].web_url);
    }
  }).fail(function(err) {
    throw err;
  });
}
getNYT(beginDate, endDate);
$( "#date-from" ).datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange:"1851:2017",
  dateFormat: 'yy-mm-dd'
  // onSelect: function() {
  //
  // }
});
$( "#date-to" ).datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange:"1851:2017",
  dateFormat: 'yy-mm-dd'
});
$('body').on('click', '#get-articles-with-dates', processArticles);
function processArticles() {
  var dateFrom = $("#date-from").val();
  var dateTo = $("#date-to").val();
  if(new Date(dateFrom) > new Date(dateTo)) alert('Second date is earlier than first!');
  beginDate = dateFrom.replace(/-/g,'');
  endDate = dateTo.replace(/-/g,'');
  getNYT(beginDate, endDate);
}
