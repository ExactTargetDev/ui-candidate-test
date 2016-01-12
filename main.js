$.getJSON("data/help.json", function(json) {
    $.each(json, function(idx, helpArray) {
        var i, key, _key, _value, link,
            ul = $('<ul>');

        for (i = 0; i < helpArray.length; i++) {
            link = $('<li>').append($('<a>', { className: 'url-link', href: helpArray[i].URL, 'target': '_blank'} )
                            .append('<span className = "title">'+helpArray[i].title+'<span/>'));
            ul.append(link);
        }
        $('.modal .modal-body').append(ul);
    });
});

$("aside ul>li").on("click", 'a', function(event) {
    event.preventDefault();
    var $this = $(this).parent();
    $("aside ul>li").removeClass("active");
    $this.addClass("active");
});

$("div.content > ul").on("click", "li", function(event){
    var $this = $(this);
    $this.find('displayOnExpand').removeClass('x-hidden');
    $this.addClass("expand").siblings().removeClass("expand");
});