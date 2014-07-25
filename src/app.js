$(function() {
    var lis = [];
    function startApp() {
        buildNavList();
    }

    function buildNavList() {
        var $ul = $('#left-nav-list');
        if($ul) {
            var $li;
            _.each(siteData.leftNav, function(item) {
                $li = createLeftNavLI(item);
                $ul.append($li);
            }, this);
        }
    }

    function createLeftNavLI(data) {
        var $li = $('<li></li>');
        if(data.isSpacer) {
            $li.addClass('spacer')
                .html('<hr />')
        } else {
            var $a = $('<a></a>'),
                $span1 = $('<span></span>'),
                $span2 = $('<span></span>');

            $a.attr('href', data.url);
            $li.append($a);
            $span1.addClass(data.iconClass);

            $span2.addClass(data.textClass)
                  .html(data.text);
            $a.append($span1);
            $a.append($span2);

            lis.push($li);
        }
        return $li;
    }

    startApp();
});
