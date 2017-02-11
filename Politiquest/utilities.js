"use strict";

// returns mouse position in local coordinate system of element
function getMouse(e){
	var mouse = {} // make an object
	mouse.x = e.pageX - e.target.offsetLeft;
	mouse.y = e.pageY - e.target.offsetTop;
	return mouse;
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}