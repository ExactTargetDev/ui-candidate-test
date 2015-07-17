/**
 * Created by Hung on 7/16/15.
 */
$(function() {
    $('.nav-sidebar').on('click', 'li', null, function(){
        // Removes current active class
        var wholeSideBar = $(this).parentsUntil('div.sidebar').parent()[0];
        $(wholeSideBar).find('li').removeClass('active');
        // Adds to the correct item
        if(this.id !== "logo"){
            var li = $(this);
            if(li.hasClass('active')){
                li.removeClass('active');
            }else{
                li.addClass('active');
            }
        }
    });

    $('#help').on('click', function(e){
        $('#myModal').modal('show');
        $.get('data/help.json', function(data){
            for(var i = 0; i < data.help.length; i++) {
                var item = data.help[i];
                $('#myModal').find('.modal-content > div.modal-body').append($('<a/>').attr({'href': item.URL}).html(item.title), "<br/>");
            }
        });
        e.preventDefault();
    })
});
