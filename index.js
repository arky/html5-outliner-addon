// Displays HTML5 Outline of the current tab

var tabs = require("sdk/tabs");
var { ActionButton } = require("sdk/ui/button/action");

var panel = require("sdk/panel").Panel({
width: 400,
height: 480
});


var button = ActionButton({
    id: "html5Outliner-link",
    label: "HTML5 Outliner",
    icon: "./html5-logo.png",
    onClick: function(state) {
	panel.contentURL = "http://gsnedders.html5.org/outliner/process.py?url=" + tabs.activeTab.url
	console.log("You clicked '" + tabs.activeTab.url + "'");
}
});

