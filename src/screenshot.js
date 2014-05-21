$('#boxes').on('click', '.box', function(e){
  $('#boxes').children().not($(this)).removeClass('medium');
  $(this).toggleClass('medium');
});