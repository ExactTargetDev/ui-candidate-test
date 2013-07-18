var HelpSystem = function() {

	window.addEventListener('DOMContentLoaded', (function(){

		// hardcode help link's id for now
		this._helpLink = document.getElementById('help');
		this._helpLink.addEventListener('click', this._onclickCallback.bind(this), false);
		
	}).bind(this), false);

};

HelpSystem.prototype._onclickCallback = function(e) {
	e.preventDefault();
	this.sendRequest( this._helpLink.href + '.json' );
};

HelpSystem.prototype.sendRequest = function(url) {
	// prep/start the ajax call
	
	this._request = new XMLHttpRequest();
	this._request.onload = this._onAjaxLoadCallback.bind(this);
	this._request.open('get', url, true);
	this._request.send();

};

HelpSystem.prototype._onAjaxLoadCallback = function() {
	//debugger;
	//this._request.response;
	
	var container = document.createElement('div'),
		bkg = document.createElement('div'),
		contentContainer = document.createElement('div'),
		closeBtn = document.createElement('a');

	container.setAttribute('id', 'helpSystemPopup');
	bkg.setAttribute('id', 'helpSystemPopupBkg');
	contentContainer.setAttribute('id', 'helpSystemPopupContent');
	
	closeBtn.setAttribute('id', 'helpSystemPopupClose');
	closeBtn.setAttribute('href', '#');
	closeBtn.innerHTML = 'X';
	
	closeBtn.addEventListener('click', this.close, false);
	bkg.addEventListener('click', this.close, false);
	
	this._convertJSONtoElements( contentContainer );
	
	
	container.appendChild(bkg);
	container.appendChild(contentContainer);
	container.appendChild(closeBtn);
	
	document.body.appendChild( container );
};

HelpSystem.prototype._convertJSONtoElements = function(appendToParentNode) {

	var json = JSON.parse(this._request.responseText);

	// loop over the keys in the returned json
	// assume the key is the section's title
	for (var section in json)
	{
		var title = document.createElement('h1');
		title.appendChild(
			document.createTextNode( section )
		);
		
		appendToParentNode.appendChild( title );
		
		// now loop over the array of objects, creating a link for each
		for (var i=0, cnt=json[section].length; i < cnt; i++)
		{
			var link = document.createElement('a');
			
			link.setAttribute('href', json[section][i]['URL']);
			link.setAttribute('target', '_blank');
			
			link.appendChild(
				document.createTextNode(
					json[section][i]['title']
				)
			);
			
			appendToParentNode.appendChild( link );
		}
	}

};

HelpSystem.prototype.close = function(e) {
	
	if (e)
		e.preventDefault();
	
	var helpSystemContainer = document.getElementById('helpSystemPopup');
	helpSystemContainer.parentNode.removeChild(helpSystemContainer);
	
};

new HelpSystem();