// js/views/chords.js

  var app = app || {};

  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  app.ChordView = Backbone.View.extend({
    name: 'View:Chord',
    //... is a list tag.
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template( $('#chord-template').html() ),

    // The DOM events specific to an item.
    events: {

    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      // console.log( this.name +".init" );
      this.listenTo(this.model, 'change', this.render);
    },

    // Re-renders the titles of the todo item.
    render: function() {
       console.log( this.name+".render" );
       console.log(this.model.toJSON())
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }

  });