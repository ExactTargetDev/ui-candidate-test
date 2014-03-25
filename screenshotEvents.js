$(".button").mousedown(function () {
	$(this).css("background-color","rgba(255, 216, 0, 0.4)");
});
$(".button").mouseover(function() {
	$(this).css("background-color", "rgba(255, 216, 0, 0.2)");
});
$(".button").mouseout(function () {
	$(this).css("background-color", "");
});
$("#button-help").click(function () {
    //$.ajax({
    //    url: "data/help.json",
    //    //force to handle it as text
    //    dataType: "text",
    //    success: function (data) {

    //        //data downloaded so we call parseJSON function 
    //        //and pass downloaded data
    //        var json = $.parseJSON(data);
    //        //now json variable contains data in json format
    //        //let's display a few items
    //        $('#results').html('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
    //    }
    //});
	$("#dialog").dialog();
});
