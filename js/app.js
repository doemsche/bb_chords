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

    		var arr = ['e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#'];
    		console.log(arr.length)
    		for(var i = 0; i < arr.length; i++){
    			$('#static-notes-0').append('<li class="static-note-instance"'+'id="'+i+'"><a href="#">'+arr[i]+'</a></li>');
    		}
            for(var i = 0; i < arr.length; i++){
                $('#static-notes-1').append('<li class="static-note-instance"'+'id="'+i+'"><a href="#">'+arr[i]+'</a></li>');
            }

    		$('.static-note-instance').click(function(){
    			var gString = $(this).parent().attr('id').substring(13);
                var fret = $(this).attr('id');
    		})


});


