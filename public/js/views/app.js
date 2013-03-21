// js/views/app.js

  var app = app || {};

  // The Application
  // ---------------
  
  // Our overall **AppView** is the top-level piece of UI.
  app.AppView = Backbone.View.extend({

    name: "View:AppView",
    el: '#chordapp',
    static_data: ['e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#','e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#',
               'e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#','e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#'],
    events: {
      'click #submit-new-chord': 'createOnsubmit'
    },

    initialize: function() {
      //console.log(this.name+".init");
      this.$name = this.$('#chord-name');
      this.$chordData = this.$('#chord-data');
      this.$main = this.$('#main');
      this.$footer = this.$('#footer');

      this.listenTo(app.Chords, 'add', this.addOne);
      this.listenTo(app.Chords, 'reset', this.addAll);
      this.listenTo(app.Chords, 'all', this.render);
      app.Chords.fetch();

      this.listenTo(app.Notes, 'add', this.addNote);
      this.renderStaticNotes(22); 
   
    },

    addNote: function(note){
      var view = new app.NoteView({model:note});
      var guitarString = note.get('gString');
      $(guitarString).append( view.render().el );
    },

    render: function() {
      // console.log(this.name+".render");
      if ( app.Chords.length ) {
        this.$main.show();
        this.$footer.show();
      } else {
        this.$main.show();
        this.$footer.hide();
      }
    },

    addOne: function( chord ) {
      var view = new app.ChordView({ model: chord });
      $('#chord-list').append( view.render().el );
    },

    addAll: function() {
      this.$('#chord-list').html('');
      app.Chords.each(this.addOne, this);
    },

    filterOne : function (chord) {
      todo.trigger('visible');
    },

    filterAll : function () {
      app.Chords.each(this.filterOne, this);
    },

    createOnsubmit: function( e ) {
      var chordName = $('#chord-name').val();
      $('#chord-name').val('');

      var arr =[];
      _.each(app.Notes.returnActive(), function(note){
          var noteValue = note.get('noteValue');
          var fret = note.get('fret');
          var gString = note.get('gString').substr(1);
          arr.push({noteValue: noteValue, fret:fret, gString:gString});
      });
      app.Chords.create( { name: chordName, data: JSON.stringify(arr) } );

      app.Notes.each(function(item) {
          item.set("active", false)// instanceof app.Notes
      });
      $('.static-note-instance').children().removeAttr('style').removeClass('act')

    },

    renderStaticNotes: function(fretboardSize){
      this.drawGString( fretboardSize, {strValue:6, id:'#e-string', offset: 0}); //E-String
      this.drawGString( fretboardSize, {strValue:5, id:'#a-string', offset: 5}); //A-String
      this.drawGString( fretboardSize, {strValue:4, id:'#d-string', offset: 10});//D-STring
      this.drawGString( fretboardSize, {strValue:3, id:'#g-string', offset: 3});//G-STring
      this.drawGString( fretboardSize, {strValue:2, id:'#b-string', offset: 7});//B-STring
      this.drawGString( fretboardSize, {strValue:1, id:'#e-high-string', offset: 0});//E-STring  
    },

    drawGString: function(fretboardSize, obj){
        for(var i = obj.offset; i < fretboardSize +obj.offset ; i++){
            var note = new app.Note( {noteValue: this.static_data[i], gString: obj.id, fret: i-obj.offset} );
            app.Notes.add(note);
        }   
    }

  });