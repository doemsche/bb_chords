 // js/collections/notes.js

  var app = app || {};
 
  // Todo Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var NotesList = Backbone.Collection.extend({
    name: 'Collection:NotesList',
    // Reference to this collection's model.
    model: app.Note,
    localStorage: new Backbone.LocalStorage('notes-backbone'),

    initialize: function(){
      // console.log(this.name+'.init');
    }

  });

  // Create our global collection of **Notes**.
    app.Notes = new NotesList();