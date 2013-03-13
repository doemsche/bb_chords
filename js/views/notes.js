// js/views/notes.js

  var app = app || {}; 

  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  app.NoteView = Backbone.View.extend({
    name: 'View:Note',
    //... is a list tag.
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template( $('#note-template').html() ),

    // The DOM events specific to an item.
    events: {
      'click .note': 'highlight'
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      // console.log( this.name +".init" );
      this.listenTo(this.model, 'change', this.render);
    },

    // Re-renders the titles of the todo item.
    render: function(x) {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    },

    highlight: function(chordnote){
      var state = this.model.get('active');
      // console.log("STATE IS: "+ state);
      if(state){
          // console.log("***************** removed note to...");
          this.model.set('active', false);
          app.Notes.remove(this.model);
      }
      else {
          // console.log("################# added note to...");
          this.model.set('active', true);
          app.Notes.add(this.model);
      }
      this.$el.toggleClass('debug-red');
    },

    remHighlight: function(){
      this.$el.removeClass('debug-red');
    }

  });