var app = app || {};
var ENTER_KEY = 13;

$(function() {

    var notes = [
        { name:"e", value: "0" },
        { name:"b", value: "0" },
        { name:"g", value: "0" },
        { name:"d", value: "0" },
        { name:"a", value: "0" },
        { name:"e", value: "0" }
    ];

 // new app.NotesView(notes);

	// Kick things off by creating the **App**.
    new app.AppView();

    //new app.NoteView( notes );
	

});
