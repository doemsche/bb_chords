// js/views/notes.js

  var app = app || {}; 

  // Todo Item View
  // --------------

  // The DOM element for a note item...
  app.NoteView = Backbone.View.extend({
    name: 'View:Note',
    tagName: 'li',
    template: _.template( $('#note-template').html() ),

    // The DOM events specific to an item.
    events: {
      'click': 'highlight'
    },

    initialize: function() {
      //console.log(this.name+'.init');
      //this.listenTo(this.model, 'change', this.render);

      //this.listenTo(this.model, 'visible', this.toggleVisible);
    },

    render: function() {
      this.$el.html( this.template( this.model ));
      this.$el.addClass('static-note-instance');
      return this;
    },

    highlight: function(){
      var status = this.model.get('active');
      console.log(status);
      if(status){
        this.model.set('active', false);
        this.$el.removeClass('debug-red');
      }
      else
      {
        this.model.set('active', true);
        this.$el.addClass('debug-red')
      }
    }

  });