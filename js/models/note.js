
  // js/models/note.js

  var app = app || {};

  // Todo Model 
  // ----------
  // Our basic **Todo** model has `title`, `order`, and `completed` attributes.

  app.Note = Backbone.Model.extend({
    name: "Model:Note",
    static_data: ['e','f','f#','g','g#','a', 'bb','b','c','c#','d','d#'],

    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      
    },

    initialize: function(){
      console.log(this.name+ "init")
      console.log(this.get("fret"))
      console.log(this.static_data[this.get("fret") % 12])
      /*this.on('change:active', function(){
        //console.log('active value for this model has changed.');
      })*/
    }

  });