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
  $('body').append( '<div class="help-popup"><div class="help-menu"></div></div>' );

  var contents = '';

  contents += '<h3 class="close-help">Close Pop-Up</h3>';
  contents += '<h1>' + data.help.header + '</h1>';
  contents += '<h3>' + data.help.subhead + '</h3>';
  contents += '<ul>';
  for (var i = 0; i < data.help.topics.length; i++) {
    contents += '<li><a href="#">' + data.help.topics[i] + '</a></li>';
  }
  contents += '</ul>';
  contents += '<p>' + data.help.body + '</p>';

  $('.help-menu').append(contents);

  $('.close-help').click(function(e){
    $('.close-help').off('click');
    $('.help-popup').remove();
  });
};