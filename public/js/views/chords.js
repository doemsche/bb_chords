// js/views/chords.js

  var app = app || {};

  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  app.ChordView = Backbone.View.extend({

    name: 'View:Chord',
    //... is a list tag.
    tagName: 'li',


    events: {
      'click .chord-delete': 'clear'
    },


    initialize: function() {
      // console.log( this.name +".init" );
      console.log(this);
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-renders the titles of the todo item.
    render: function() {
      this.$el.html( _.template( $('#chord-template').html(), this.model.toJSON() ) );
      return this;
    },

    clear: function() {
      //if(confirm("Really delete this chord?")){this.model.destroy();} else {return false;}
      this.model.destroy();
      
    }

  });