$('#boxes').on('click', '.box', function (e) {
  $('#boxes').children().not($(this)).removeClass('medium');
  $(this).toggleClass('medium');
});

$('#sidebar').on('click', 'a', function (e) {
  $('#sidebar').find('a').not($(this)).removeClass('orange');
  $(this).addClass('orange');
});

// This needs to be on a server to test.
// python -m SimpleHTTPServer works fine
// Running straight out of the html document doesn't

$('.help').click(function(){
  $.ajax({
    method: 'GET',
    dataType: 'JSON',
    url: 'src/help.json',
    success: function (data) {
      parseHelp(data);
    }
  });
});

var parseHelp = function (data) {
  // todo: this
};