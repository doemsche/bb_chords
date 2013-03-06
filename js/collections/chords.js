 // js/collections/todos.js

  var app = app || {};
 
  // Todo Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var ChordsList = Backbone.Collection.extend({
    name: 'Collection:ChordsList',
    // Reference to this collection's model.
    model: app.Chord,

    // Save all of the todo items under the `"todos"` namespace.
    localStorage: new Backbone.LocalStorage('chords-backbone'),

    initialize: function(){
      console.log(this.name+".init");
    }

  });

  // Create our global collection of **Chords**.
  app.Chords = new ChordsList();