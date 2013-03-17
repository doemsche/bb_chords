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
      console.log(this.name+".init");
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
      console.log(note);
      var view = new app.NoteView({model:note});
       $('#fretboard').append( view.render().el );
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
          //arr.push({noteValue: noteValue});
          arr.push(noteValue);
      });
      app.Chords.create( { name: chordName, data: JSON.stringify(arr) } );

      app.Notes.each(function(item) {
          item.set("active", false)// instanceof app.Notes
      });
      $('.static-note-instance').removeClass('debug-red')

    },

    renderStaticNotes: function(fretboardSize){
      this.drawGString( fretboardSize, {strValue:6, name:'e-string'}); //E-String
      this.drawGString( fretboardSize, {strValue:5, name:'a-string'}); //A-String
      this.drawGString( fretboardSize, {strValue:4, name:'d-string'});//D-STring
      this.drawGString( fretboardSize, {strValue:3, name:'g-string'});//G-STring
      this.drawGString( fretboardSize, {strValue:2, name:'b-string'});//B-STring
      this.drawGString( fretboardSize, {strValue:1, name:'e-high-string'});//E-STring  
    },

    drawGString: function(fretboardSize, obj){

        for(var i = 0; i < fretboardSize ; i++){
            var note = new app.Note( {noteValue: this.static_data[i]} );
            app.Notes.add(note);
        }   
    }

  });