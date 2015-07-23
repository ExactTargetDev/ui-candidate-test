var tasks = {
	labels : { 
		buttonId 				: 'btn-submit',
		dropDownId  			: 'dynamicSelect',
		targetID				: 'div1',
		listPlaceHolder			: 'list1',
		listId					: 'dyn-list',
		checkboxesPlaceHolder 	: 'foobar'
	},
	addNewDropdownList : function(o){
		var s = $('<select id=\"'+tasks.labels.dropDownId+'\" class=\"dynamicSelect\">');
		s.append($('<option/>').attr({'value': 0, 'name': 'default'}).html('= Select ='));
		if(typeof o === 'object'){
			$.each(o,function(key,value){
				s.append($('<option/>').attr({'value': value.value, 'name': value.text}).html(value.text));
			});
		}
		tasks.appendTo(tasks.labels.targetID,s);
		tasks.appendTo(tasks.labels.dropDownId,s);
		tasks.addButton();
	},
	addButton : function(){
		var button = $('<button/>').attr('id',tasks.labels.buttonId).html('Click me');
		tasks.appendTo(tasks.labels.targetID,button);
		tasks.bindClick(tasks.labels.buttonId);
	},
	bindClick : function(id){
		$('#'+id).on('click',function(e){
           var selectedOpt = $('#'+tasks.labels.dropDownId+' option:selected');
           console.log('Name: ' + selectedOpt.attr('name'));
           console.log('Value: ' + selectedOpt.attr('value'));
		});
	},
	appendTo : function(id,html){
		$('#'+id).append(html);
	},
	creatDropdown : function(o){
		tasks.addNewDropdownList(o);
	},
	createListItem : function(o){
		var el = $('<ul id=\"'+tasks.labels.listId+'\" class=\"'+tasks.labels.listId+'\">');
		if(typeof o === 'object'){
			$.each(o,function(key,value){
				el.append($('<li/>').attr({'name': value.value}).html(value.text));
			});
		}
		tasks.appendTo(tasks.labels.listPlaceHolder,el);
	},
	addCheckBoxList : function(o){
		var ch = $('#'+ tasks.labels.checkboxesPlaceHolder);
		if(typeof o === 'object'){
			$.each(o,function(key,value){
				ch.append('<input class="checkbox" type="checkbox"  name="name' + value.value+""+key + '" value="' + value.value+ '">' + value.text + '<br>');
			});
		}
		var links = {
			link1 : {
				onClick : function(e){
					$('#'+ tasks.labels.checkboxesPlaceHolder+'>input[type="checkbox"]').prop('checked',true);
				},
				href : 'javascript:void(0);',
				text : 'Check All',
				cls : 'link-1',
				id : 'check-all'
			},
			link2 : {
				onClick : function(e){
					$('#'+ tasks.labels.checkboxesPlaceHolder+'>input[type="checkbox"]').prop('checked',false);
				},
				href : 'javascript:void(0);',
				text : 'Un Check All',
				cls : 'link-2',
				id : 'uncheck-all'
			}			
		};
		tasks.addLinks(links);
	},
	addLinks : function(o){
		var el = $('#'+ tasks.labels.checkboxesPlaceHolder);
		if(typeof o === 'object'){
			$.each(o,function(key,value){
				var t = $('<a class=\"'+value.cls+'\" href=\"'+value.href+'\" id=\"' + value.id + '\"  >' + value.text + '</a>')
				t.on('click',value.onClick);
				el.append(t);
				el.append('<br/>');
			});
		}
	}
};