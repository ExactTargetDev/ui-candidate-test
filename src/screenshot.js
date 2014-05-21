$('#boxes').click('.box', function(e){
  $('#boxes').children().not(e.target).removeClass('medium');
  $(e.target).toggleClass('medium');
});