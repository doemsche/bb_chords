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

    $('#reset-notes').click(function(){
        app.Notes.reset();
    });

    var arr = ['e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#','e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#',
               'e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#','e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#'];
    var fretboardSize = 22;

    var drawGString = function(obj){
        for(var i = obj.offset; i < fretboardSize + obj.offset; i++){
            $('#static-notes-'+obj.name).append('<li class="static-note-instance"'+'id="'+i+'"><a href="#"><span class="hide-note-text">'+arr[i]+'</span></a></li>');
        }   
    }

    drawGString({name:'e-string', offset:0}); //E-String
    drawGString({name:'a-string', offset:5}); //A-String
    drawGString({name:'d-string', offset:10});//D-STring
    drawGString({name:'g-string', offset:3});//G-STring
    drawGString({name:'b-string', offset:7});//B-STring
    drawGString({name:'e-high-string', offset:0});//E-STring




    /*for(var i = 0; i < arr.length; i++){
        $('#static-notes-1').append('<li class="static-note-instance"'+'id="'+i+'"><a href="#">'+arr[i]+'</a></li>');
    }*/

    $('.static-note-instance').click(function(){
    	var gString = $(this).parent().attr('id').substring(13);
        var fret = $(this).attr('id');
        app.Notes.add({gString: gString, fret:fret});
    })


});


