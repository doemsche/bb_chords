
  // js/models/note.js

  var app = app || {};

  // Todo Model 
  // ----------
  // Our basic **Todo** model has `title`, `order`, and `completed` attributes.

  app.Note = Backbone.Model.extend({
    name: "Model:Note",

    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      active: false
    },

    initialize: function(){
      //console.log(this.name+ "init");

    },

    // Toggle the `completed` state of this todo item.
    toggle: function(active) {
        //console.log(this.view)
    }

  });
