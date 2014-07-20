/*
	unfeed.js
	Removes key profile information from the newsfeed
	@author: Charles J Lai
*/

//Constants
var UPDATE_INTERVAL = 100;
var LONG_UPDATE_INTERVAL = 10000;

//Main profile information removal function
function removeProfileInfo() {
	//Get arrays of nodes
	var profileNames = document.querySelectorAll(".fwb, .profileLink");
	if (typeof profileNames === undefined) {
		return;
	}
	var profilePics = document.getElementsByClassName("_s0 _5xib _5sq7 _rw img");
	var commentPics = document.getElementsByClassName("UFIImageBlockImage");
	var commentNames = document.getElementsByClassName("UFICommentActorName");

	//Remove all profile pictures in the viewport
	for (var i = 0; i < profilePics.length; i++) {
		profilePics[i].remove();
	}

	//Remove all commenter pictures in the viewport
	for (var i = 0; i < commentPics.length; i++) {
		commentPics[i].remove();
	}

	//Replace all profile names in the view port with "Someone".
	for (var i = 0; i < profileNames.length; i++) {
		profileNames[i].innerHTML = "Someone";
	}

	//Replace all commenter names in the view port with "Someone".
	for (var i = 0; i < commentNames.length; i++) {
		commentNames[i].innerHTML = "Someone";
	}
}

///////////////
//MAIN SCRIPT//
///////////////

//Initial removal on load
removeProfileInfo();
//Remove ticker in side-bar
var ticker = document.getElementsByClassName("ticker_stream");
ticker[0].remove();
//Attempt to remove more information on UPDATE_INTERVAL
setInterval(removeProfileInfo, UPDATE_INTERVAL);
