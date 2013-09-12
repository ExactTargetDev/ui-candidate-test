(function($,window,document,undefined){
	$.fn.makeActive = function(){
		var self = this;
		return this.each(function(){
			$(this).on('click',function(){
				//console.log(this);
				//console.log(self);
				self.removeClass('active');
				$(this).addClass('active');
			});
		});
	};
})(jQuery,window,document);

(function($,window,document,undefined){
	$.fn.pulseScroller = function(){
		var self = this;
		this.pulsed = null;
		return this.each(function(){
			$(this).on('click',function(){
				if($(this).hasClass('pulsed'))return;
				if(self.pulsed!=null){
					self.pulsed.removeClass('pulsed');
					$('.pulse-card',self.pulsed).animate({
						height:100,
						width:160,
						marginTop:0
					},100,'linear',function(){
						$(this).removeClass('pulse-card-md');
					});
					$('.pulse-card-title',self.pulsed).animate({
						marginTop:0
					},300,'linear');
				}
				
				$('.pulse-card-title',$(this)).animate({
					marginTop:-40
				},100,'linear');

				$('.pulse-card',$(this)).animate({
					height:165,
					width:280,
				},300,'linear',function(){
					$(this).addClass('pulse-card-md');
				});

				$(this).addClass('pulsed');
				self.pulsed = $(this);
			});
		});
	};
})(jQuery,window,document);



(function($,window,document,undefined){
	
	$.fn.getHelp = function(){
		var self = this;
		this.getHelpData = function(){
			$.ajax({url:'data/help.json'}).done(this.handleData);
		};
		this.handleData = function(data){
			var helplength = 0, _ul;
			
			helplength = data.help.length;
			$('#showHelp').empty();
			_ul = $('<ul>');
			for(var i=0;i<helplength;i++){
				_ul.append('<li><a href="'+data.help[i].URL+'">'+data.help[i].title+'</a>');
			}
			$('#showHelp').append(_ul);
		
			$('#showHelp').css({
				left:($(window).innerWidth()/2-$('#showHelp').innerWidth()/2)
			});
			$('#showHelp').animate({top:50});
			$('body').one('click',function(){
				$('#showHelp').animate({top:-500});
			});
		};
		return this.each(function(){
			$(this).on('click',function(){
				$('#showHelp').css({position:'absolute'});
				self.getHelpData();
				return false;
			});
		});
	};
	


})(jQuery,window,document);

