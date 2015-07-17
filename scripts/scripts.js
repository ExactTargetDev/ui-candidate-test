(function(window) {
    $('.box').each(function() {
        var that = this;

        $(this).on('click', function toggleBoxes() {
            $(this).parent().find('.box').each(function() {
                $(this)[this != that ? 'removeClass' : 'addClass']('active');
            });
        });
    });

    var helpLoaded = false;

    window.showHelp = function() {
        if (!helpLoaded) {
            $.ajax({
                url : 'data/help.json'
            }).success(function(data) {
                if (!data || !data.help || !data.help.length) {
                    return;
                }

                var list = $('<ul></ul>');

                for (var i = 0, length = data.help.length; i < length; i++) {
                    $('<li><a href="' + data.help[i].URL + '">' + data.help[i].title + '</a></li>').appendTo(list);
                }

                $('#helpModal .modal-body').append(list);

                helpLoaded = true;

                showHelpModal();
            });
        } else {
            showHelpModal();
        }
    };

    function showHelpModal() {
        $('#helpModal').modal('show');
    }
})(window);
