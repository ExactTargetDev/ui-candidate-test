$('#boxes').on('click', '.box', function(e){
  $('#boxes').children().not($(this)).removeClass('medium');
  $(this).toggleClass('medium');
});
$('#sidebar').on('click', 'a', function(e){
  $('#sidebar').find('a').not($(this)).removeClass('orange');
  $(this).addClass('orange');
});