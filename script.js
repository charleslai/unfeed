/*
	script.js
	Some Javascript functions for interacting with the FB newsfeed.
	No jQuery required.
	@author: Charles J Lai
*/

//Remove all profile pictures in the viewport
var prof_pics = document.getElementsByClassName("_s0 _5xib _5sq7 _rw img");
for (var i = 0; i < prof_pics.length; i++) {
	prof_pics[i].remove();
}

//Replace all profile names in the view port with "Someone".
var prof_names = document.getElementsByClassName("profileLink");
for (var i = 0; i < prof_names.length; i++) {
	prof_names[i].innerHTML = "Someone";
}