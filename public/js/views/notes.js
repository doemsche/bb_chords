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
      'click': 'highlight',
      'mouseover': 'preview',
      'mouseout' : 'postview'
    },

    initialize: function() {
      
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ));
      this.$el.addClass('static-note-instance');
      return this;
    },

    highlight: function(){
      console.log(this.model.get('fret'));
      var status = this.model.get('active');
      if(status){
        this.model.set('active', false);
        this.$el.children(':first').removeAttr('style').removeClass('act');
      }
      else
      {
        this.model.set('active', true);
        this.$el.children(':first').removeAttr('style').addClass('act');
        this.$el.children(':first').filter(':not(:animated)').animate(
          {
            backgroundColor: '#646464'
          }, 200, 'linear'
        );
      }
    },
    preview: function(){
      //console.log("prevei");
       //this.$el.children(':first').filter(':not(:animated)').addClass('preview');
       
    },
    postview: function(){
        //this.$el.children(':first').filter(':not(:animated)').removeClass('preview');
        //this.$el.children(':first').filter(':not(:animated)').animate({ borderColor: '#EAF4FF'});
    }

  });