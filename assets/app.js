// Would have preferred to use an ES6 + React solution, but ran out of time
// Thus, we'll have an ES5 jQuery soup

/* global $ */

(function() {
    "use strict";

    // Help section
    $('#launch-help').click(function() {
        $.ajax({
            url: 'data/help.json',
            success: function(data) {
                var $modal = $('#help-modal');
                var $body = $modal.find('.modal-body');
                var $ul = $('<ul>');

                $body.html('');  // Clear out previous children

                data.help.forEach(function(helpItem) {
                    var title = helpItem.title;
                    var link = helpItem.URL;

                    $ul.append('<li><a href="' + link + '">' + title + '</a>');
                });

                $body.append($ul);

                $modal.modal();
            },
        });
    });
})();
