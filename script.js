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

// Let the page finish loading.
$(document).ready(function() {
    offsetAnchor();
});