var data = {
    "help": [
        {
            "title": "What is JSON?",
            "URL": "http://en.wikipedia.org/wiki/JSON"
        },
        {
            "title": "What is Salesforce?",
            "URL": "https://en.wikipedia.org/wiki/Salesforce_Marketing_Cloud"
        },
        {
            "title": "More info about Salesforce Marketing Cloud REST APIs",
            "URL": "http://code.exacttarget.com/question/rest-api-authentication"
        }
    ]
};

$('.help-link').click(function() {
    var menu = $('.overlay');
    // clear html
    menu.html('');
    var ul = $('<ul class="help-list">');
    _.each(data.help, function(helpItem) {
        ul.append($('<li class=\'help-menu-item\'><a href='+helpItem.URL+'>'+helpItem.title+'</a></li>'));
    });
    menu.append(ul);
    menu.addClass('visible');

    _.defer(function() {
        $('body').click(function() {
            $('.overlay').html('').removeClass('visible');
            $('body').off('click');
        });
    }, 100);
});