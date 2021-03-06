
  // js/models/chord.js

  var app = app || {};

  // Todo Model 
  // ----------
  // Our basic **Todo** model has `title`, `order`, and `completed` attributes.

  app.Chord = Backbone.Model.extend({
    idAttribute: '_id',
    name: 'Model:Chord',
    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {

    },

    validate: function (attrs) {
        if (attrs.data.length == 0) {
            return 'Please fill email field.';
        }
    },

    initialize: function(){
      //console.log(this.name+".init");
    },
    remove: function(){

    }

  });