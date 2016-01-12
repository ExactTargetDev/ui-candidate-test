$.getJSON("data/help.json", function(json) {
    console.log(json);
});

$("aside ul>li").on("click", 'a', function(event){
    event.preventDefault();
    var $this = $(this).parent();
    $("aside ul>li").removeClass("active");
    $this.addClass("active");
    console.log('this - ' + $this);
});

$('#helpJSON').on('click', 'a', function(event){
    // $('.helpWindow').removeClass('x-hidden');
    console.log('event');
});