var Pulse = function(userOpts) {
	
	// default options
	this.options = {
		'containerID': 'pulse',
		'activeClassName': 'pulse-active'
		
		// other default options would go here
	};
	
	
	// if the user had passed in an object specifying options, they would override defaults defined above
	if (userOpts)
	{
		for (var key in userOpts)
			if (key in this.options)
				this.options[key] = userOpts[key];
	}

	
	// helper code - wait until the dom is ready before interacting with it
	var self = this,
		onDomContentLoaded = function(callback) {
			window.addEventListener('DOMContentLoaded', callback.bind(self), false);
	};
	
	// when able, grab a ref to the container and then set the click event handlers
	onDomContentLoaded(this.getContainer);
	onDomContentLoaded(this.setClickListeners);
};

// collect a reference to the specified container
Pulse.prototype.getContainer = function() {
	this._container = document.querySelector('#'+this.options.containerID);
};

// loop through all the items in the pulse box, and set up click event listeners
Pulse.prototype.setClickListeners = function() {
	
	// don't attempt to continue if we didn't find the container
	if (!this._container)
		return;
	
	var items = this._container.querySelectorAll('li');
	for (var i=0, cnt=items.length; i < cnt; i++)
	{
		items[i].addEventListener('click', this._onclickCallback.bind(this, items[i]), false);
	}

};

// called when someone clicks on an item in the pulse box
Pulse.prototype._onclickCallback = function(item) {
	this.clearActive();
	this.setActive( item );
};

// removes the activeClassName from the currently active item
Pulse.prototype.clearActive = function () {
	var className = this.options.activeClassName,
		item = this._container.querySelector( '.' + className ),
		itemClasses = null;
	
	// don't continue if we didn't find an active item
	if (!item)
		return;


	itemClasses = item.className.split(' ');

	for (var i=0, cnt=itemClasses.length; i < cnt; i++)
	{
		if (itemClasses[i] == className)
		{
			itemClasses.splice(i,1);
			break;
		}
	}

	item.className = itemClasses.join(' ');
};


// adds the activeClassName to the specified item
Pulse.prototype.setActive = function (item) {
	
	item.className += ' ' + this.options.activeClassName;
	
};


// automatically set up
// the object itself will wait until the DOM is ready
new Pulse();