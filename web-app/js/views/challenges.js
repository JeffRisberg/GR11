/**
 * Contains ChallengesView and ChallengesRowView
 */
 
 $(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  window.ChallengesRowView = Backbone.View.extend({
    tagName: "li",

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $('#challenge-list'),
    
    // Cache the template function for a single item.
    template: _.template($('#challengesRow-template').html()),

    // The DOM events specific to a challenge.
    events: {     
      //"dblclick div.challenge-message" : "edit",
      //"click span.challenge-destroy"   : "clear",
      //"keypress .challenge-input"      : "updateOnEnter"
    },

    // The ChallengesView listens for changes to its model, re-rendering.
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    // Re-render the contents of the challenge
    render: function() {    
      $(this.el).append(this.template(this.model.toJSON()));
      return this;
    },

    // To avoid XSS (not that it would be harmful in this particular app),
    // we use `jQuery.text` to set the contents of the challenge item.
    setName: function() {
      var name = this.model.get('name');
      this.$('.challenge-name').text(name);     
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      $(this.el).addClass("editing");
      this.input.focus();
    },

    // Close the `"editing"` mode, saving changes to the challenge.
    close: function() {
      this.model.save({message: this.input.val()});
      $(this.el).removeClass("editing");
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove this view from the DOM.
    remove: function() {
      $(this.el).remove();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }
  });
  
  window.ChallengesView = Backbone.View.extend({

    initialize: function() {
      this.base = $('#challenge-list');  
    },
    
    render: function() {  
      var self=this;
      return self.el;
    },  
    
    updateFrom: function(collection) {  
      this.base.empty();
               
      var self=this;
      collection.each(function(i) {      
        var challengesRowView = new ChallengesRowView({model: i});       
        self.base.append(challengesRowView.render());                   
      });        
    }   
  });
});
