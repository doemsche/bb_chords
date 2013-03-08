// js/views/app.js

  var app = app || {};

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.AppView = Backbone.View.extend({

    name: "View:AppView",
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#chordapp',


    // Delegated events for creating new items, and clearing completed ones.
    events: {
      'click #submit-new-chord': 'createOnsubmit',
      'click #populate' : 'populate'
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function() {
      console.log(this.name+".init");
      this.$name = this.$('#chord-name');
      this.$chordData = this.$('#chord-data');
      this.$main = this.$('#main');
      this.$footer = this.$('#footer');

      this.listenTo(app.Chords, 'add', this.addOne);
      this.listenTo(app.Chords, 'reset', this.addAll);
      this.listenTo(app.Chords, 'all', this.render);

      app.Notes.fetch();
      app.Chords.fetch();
      
    },


    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      console.log(this.name+".render");
      if ( app.Chords.length ) {
        this.$main.show();
        this.$footer.show();
      } else {
        this.$main.show();
        this.$footer.hide();
      }
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( chord ) {
      console.log(this.name+".addOne");
      var view = new app.ChordView({ model: chord });
      $('#chord-list').append( view.render().el );
    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {

      console.log(this.name+".addAll");
      this.$('#chord-list').html('');
      app.Chords.each(this.addOne, this);
      app.Notes.each(this.addNotes, this);
      //reset Notes Collection
      app.Notes.reset();
    },

    addNotes: function(note){
      var view = new app.NoteView({model:note});
      $('#static-notes').append( view.render().el );
    },

    filterOne : function (chord) {
      todo.trigger('visible');
    },

    filterAll : function () {
      app.Chords.each(this.filterOne, this);
    },

    // Generate the attributes for a new Todo item.
    createNewChord: function(collection) {
      console.log(this.name+".createNewChord");
      var arr = [];
      collection.each(function(item) {
        arr.push(item.static_data[item.get('value')])
      });
      console.log(arr);
      return arr;
    }, 

    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnsubmit: function( e ) {
      console.log(this.name+".¨createOnSubmit");
      var chordName = $('#chord-name').val();
      app.Chords.create( { name: chordName, data: this.createNewChord( app.Notes ) } );
      /*app.Notes.each(function(item){
        item.model.set('active', false);
        item.view.$el.removeClass('debug-red');
      })*/
      app.Notes.reset();
    },

    populate: function(){

      app.Notes.create({name:"E", value:5});
      app.Notes.create({name:"B", value:4});
      app.Notes.create({name:"G", value:3});
      app.Notes.create({name:"D", value:2});
      app.Notes.create({name:"A", value:1});
      app.Notes.create({name:"E", value:0});

    }

  });