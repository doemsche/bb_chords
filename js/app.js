var app = app || {};
var ENTER_KEY = 13;

$(function() {


 // new app.NotesView(notes);

	// Kick things off by creating the **App**.
    new app.AppView();

    //new app.NoteView( notes );
	
    $('#ls-reset').click(function(){
        localStorage.clear();
        window.location.reload();
    });

});
