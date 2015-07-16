require('./style.scss')

$(document).ready(function () {
  $('#help-link').on('click', function() {
    $.ajax({
        url: 'data/help.json',
        dataType: 'json',
        success: function(data) {
          // query modal
          var modal = $('#helpModal .modal-body');

          // empty modal
          modal.empty();

          data.help.forEach(function (item) {
              modal.append('<a href="' + item.URL + '" target="_blank">' + item.title + '</a><br>');
          });
        }
    });
  });
});
