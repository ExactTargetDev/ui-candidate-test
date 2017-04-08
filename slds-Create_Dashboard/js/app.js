function setActivecard(id) {

  $("#con-1").removeClass("active-container");
  $("#con-2").removeClass("active-container");
  $("#con-3").removeClass("active-container");
  $("#con-4").removeClass("active-container");
  $("#con-5").removeClass("active-container");


  $("#con-1").addClass("inactive-container");
  $("#con-2").addClass("inactive-container");
  $("#con-3").addClass("inactive-container");
  $("#con-4").addClass("inactive-container");
  $("#con-5").addClass("inactive-container");


  $("#" + id).removeClass("inactive-container");

  $("#" + id).addClass("active-container");
};

function showHelp() {

  var help = {
    "help": [
      {
        "title": "What is JSON?",
        "URL": "http://en.wikipedia.org/wiki/JSON"
		        },
      {
        "title": "What is ExactTarget?",
        "URL": "http://en.wikipedia.org/wiki/ExactTarget"
		        },
      {
        "title": "More info about ExactTarget REST APIs",
        "URL": "http://code.exacttarget.com/question/rest-api-authentication"
		        }
		    ]
  };


  for (var i = 0; i < help.help.length; i++) {
    $("#help-body").append("<div class='row'>");
    $("#help-body").append("<h2>" + help.help[i].title + "</h2>");
    $("#help-body").append("<a href='" + help.help[i].URL + "'>" + help.help[i].title + "</a>");
    $("#help-body").append("</div>");
  }


  $('#helpModal').modal('show')
}
