// JavaScript Document

// keeps page jump below header
// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 150);
    } 
}

// This will capture hash changes while on the page
$(window).on("hashchange", function () {
    offsetAnchor();
});

// This will toggle the bubble to be bigger or smaller
function makeBubbleBigger(s, s2){
	bubble = document.getElementById(s);
	pobj = document.getElementById(s2);
	if (bubble.className.substring(0,6)=="bubble"){
		if(s == "bubble1" || s == "bubble4"){
			bubble.className="bigbubbleL";
		} else {
			bubble.className="bigbubbleR";
		}
		pobj.className="bigbubble-text";
	} else {
		bubble.className="bubble";
		pobj.className="bubble-text";
	}
}

// Let the page finish loading.
$(document).ready(function() {
    offsetAnchor();
});
