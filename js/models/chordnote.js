
  // js/models/chordnote.js

  var app = app || {};

  // Todo Model 
  // ----------
  // Our basic **Todo** model has `title`, `order`, and `completed` attributes.

  app.Chordnote = Backbone.Model.extend({
    name: 'Model:ChordNote' ,
    defaults: { 
      semanticValue: 'not defined' 
    },
    static_data: ['c','cis','d','dis','e','f','g','gis','a','h', 'c'],


    initialize: function(data){ 
          this.semanticValue = this.static_data[data.value];
    },

    remove: function(){
       console.log(this.name+".remove ");
    }

  });   