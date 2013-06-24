/**
 * Screenshot.js
 * @author Stephen J Barker
 */
 
(function($) {
  
  //good practice to private persist small amounts of data
  //gathered through asynchronous comm
  var helpData = null;
  
  /**
   * @name initIMH
   * @type function
   * @description This function initializes all jQuery and
   *              jQuery UI bindings and event handlers
   */
  function initIMH() {
    
    //get the help.json file
    //**the requirements asked that the help contents be loaded
    //and parsed upon clicking the help anchor, therefore we get
    //the json as text
    $.get('data/help.json', {}, function(data) {
        //on success store in helpData
        helpData = data;
      }, 'text');
    
    //when an anchor in the pulse banner is clicked
    $('#pulse-banner a').on('click', function(e) {
      //if e is falsy get event from window object
      e = e ? e : window.event;
      //if preventDefault is falsy the set returnValue to false
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      //store target using target or srcElement and get the closest li
      var $target = $((e.target || e.srcElement)),
          $li = $target.closest('li');
      
      //if the li has a class pulse-small
      if ($li.hasClass('pulse-small')) {
        //find the large li
        var $largeLi = $('li.pulse-large');
        //animate it to small...
        $largeLi.switchClass('pulse-large', 'pulse-small', 1000);
        //as well as its children
        $largeLi.find('.pulse-large')
          .switchClass('pulse-large', 'pulse-small', 1000);
        //then animate this li to large...
        $li.switchClass('pulse-small', 'pulse-large', 1000);
        //as well as its children
        $li.find('.pulse-small')
          .switchClass('pulse-small', 'pulse-large', 1000);
      }
    
    });
    
    //select all of the anchors with data-action attrs and loop through them
    $('a[data-action]').each(function() {
      //store this as jQuery object and its action
      var $el = $(this),
          action = $el.data('action');
      //if the action is toggleHelp
      if (action == 'toggleHelp') {
        $el.on('click', function(e) {
          //if e is falsy get event from window object
          e = e ? e : window.event;
          //if preventDefault is falsy the set returnValue to false
          e.preventDefault ? e.preventDefault() : (e.returnValue = false);
          //show the help modal
          $('#help-overlay').show('puff');
          //parse the json if it exists
          var json = helpData ? JSON.parse(helpData) : null,
              //and get the items if the json was parsed
              items = json ? json.help : null;
          //if there are items and items are array-like
          if (items && items.length) {
            //loop through and append the data as lis
            for (var i = 0; i < items.length; i = i + 1) {
              $('#help-modal ol')
                .append('<li><a href="' + items[i].URL +
                        '" title="' + items[i].title +
                        '">' + items[i].title + '</a></li>');
            }
          } else {//otherwise...
            //add an error message to the error div
            $('#help-modal .error').append('<strong>Help data could' +
              'not be loaded</strong>');
          }
        });
      }
    });
    
    //select all of the anchors with data-close attrs and loop through them
    $('a[data-close]').each(function() {
      //store this as jQuery object and its modal
      var $el = $(this),
          modal = $el.data('close');
      //if it's the help modal
      if (modal == 'help-modal') {
        //set the click event to hide the modal
        $el.on('click', function(e) {
          //if e is falsy get event from window object
          e = e ? e : window.event;
          //if preventDefault is falsy the set returnValue to false
          e.preventDefault ? e.preventDefault() : (e.returnValue = false);
          //hide the modal
          $('#help-overlay').hide({
            effect: 'puff',
            complete: function() {
              //when complete reset the data
              resetHelpModal();
            }
          });
        });
      }
    });
  }
  
  /**
   * @name resetHelpModal
   * @type function
   * @description This function resets the data in the help modal
   *              The requirements asked that the data be loaded and parsed
   *              upon clicking the help anchor
   */
  function resetHelpModal() {
    $('#help-modal ol').html('');
    $('#help-modal .error').html('');
  }
  
  //when the dom is ready run initIMH
  $(document).ready(initIMH);
  
})(jQuery);