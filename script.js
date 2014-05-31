$(function() {
  var $li = $('.marketing-hub').find('ul').find('li');
  $li.click(function() {
    $li.removeClass('hub-active');
    $(this).addClass('hub-active');
  });

  var $panel = $('.panel');
  $panel.click(function() {
    var $this = $(this);
    var isActive = ($this.hasClass('panel-active'));

    $panel.removeClass('panel-active');
    $panel.find('.panel-content-active').hide();
    $panel.find('.panel-content-passive').show();

    if (!isActive) {
      $this.addClass('panel-active');
      $this.find('.panel-content-passive').hide();
      $this.find('.panel-content-active').show();
    }
  });

  $.getJSON("data/help.json", function(json) {
    console.log(json);
  });
});
