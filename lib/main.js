// Displays HTML5 Outline of the current tab 

var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var panel = require("sdk/panel").Panel({
     width: 400,
    height: 480
});
 
var widgets = require("sdk/widget");
widgets.Widget({
    id: "html5Outliner-link",
    label: "HTML5 Outliner",
    width: 20,
    height: 20,
    contentURL: data.url("html5-logo.png"),
    panel:panel,
    onClick: function() {
    panel.contentURL = "http://gsnedders.html5.org/outliner/process.py?url=" + tabs.activeTab.url 
  }
});

