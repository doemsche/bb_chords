
  // js/models/note.js

  var app = app || {};

  // Todo Model 
  // ----------
  // Our basic **Todo** model has `title`, `order`, and `completed` attributes.

  app.Note = Backbone.Model.extend({
    name: "Model:Note",
    static_data: ['c','cis','d','dis','e','f','g','gis','a','h', 'c'],
    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      name: '',
      value: '',
      active: false,
      semanticValue: 'not defined x'
    },

    initialize: function(){
      console.log(this.name+".init");
    },


    addToChord: function(){

    },

    removeFromChord: function(){
      
    }

  });