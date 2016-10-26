
templateManager = (function(){
    var domTemplates = {},
        templates = {},
        grabDomTemplates = function(templs){
            var containers = $('.templates'),
                container,
                templates;
            containers.each(function(){
                    var templates = $(this).find('.template');
                    templates.each(function(){
                        addCompiledTemplate($(this));
                    });
                }
            );
        },
	    addCompiledTemplate = function(dom){
	        var templName = dom.attr('id');
	        dom.removeAttr('id');
	        dom.removeClass('template');
	        domTemplates[templName] = dom;
	        templateManager[templName] = function(){
	            return templateManager.domTemplates[templName].clone(true);
	        };
	    };
    return {
         domTemplates : domTemplates,
         templates : templates,
         grabDomTemplates : grabDomTemplates,
         addCompiledTemplate : addCompiledTemplate,
    };
}());


Templates = function(){
    this.domTemplates = {};
    this.templates = {};
};
Templates.prototype = {
    grabDomTemplates : function(templs){

        var containers = kks.dom.getElements('.templates'),
            container,
            templates;
        if(containers.length === 0) return;
        for(var i = 0; i < containers.length; i++){
            container = containers[i];
            templates = container.getElements('.template');
            for(var k = 0; k < templates.length; k++){
                this.addCompiledTemplate(templates[k]);
            }
        }
    },
    addCompiledTemplate : function(dom){
        var templName = dom.dom.id;
        dom.dom.className = dom.dom.className.replace('template', '').trim();
        this.domTemplates[templName] = dom;
        var that = this;
        this[templName] = function(){
            return that.domTemplates[templName].dom.cloneNode(true);
        };
    },
};