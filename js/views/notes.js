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
      'click .note': 'highlight',
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      console.log( this.name +".init" );
      this.listenTo(this.model, 'change', this.render);
    },

    // Re-renders the titles of the todo item.
    render: function() {
      console.log( this.name+".render" );
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    },

    highlight: function(){
      var state = this.model.get('active')
      //state = (condition) ? true-value : false-value;
      if( state ){
        this.model.set('active', false);
      } else {
        this.model.set('active', true);
      }
      console.log(this.model.get('value'))
      $('#chord-data').val( this.model.get('value') )
      this.$el.toggleClass('debug-red');
    }
  });