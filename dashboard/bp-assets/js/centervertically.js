/* - - - - - - - - - - - - - - - - - - - - - - - -
	Center vertically
- - - - - - - - - - - - - - - - - - - - - - - - */

// JS position hack: Take parent tag and do math to vertically center specified tag
function centerVertically(object) {
	var item = object.data.item;
	var height = item.height();
	var parentHeight = item.parent().height();
	//console.log(height);
	//console.log(parentHeight);
	var center = (parentHeight / 2) - (height / 2);
	//console.log(center);
	item.css("top", center + "px");
}

function centerVerticallyObject(object) {
	var item = object;
	var height = item.height();
	var parentHeight = item.parent().height();
	var center = (parentHeight / 2) - (height / 2);
	item.css("top", center + "px");
}