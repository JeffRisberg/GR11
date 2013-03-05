/**
 * Contains ChallengesView and ChallengesRowView
 */
 
 $(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  /**
   * The ChallengesRowView listens for changes to its model, re-rendering.
   */
  ChallengesRowView = Backbone.View.extend({
    tagName: "tr",
    
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.modelData = this.model.attributes;
    },
    
    // Cache the template function for a single item.
    template: _.template($('#challengesRow-template').html()),
    
    // Re-render the contents of the challenge
    render: function() {
      var html = this.template({name: this.modelData.name, description: this.modelData.description});   
      this.$el.html(html);
    },

    // The DOM events specific to a challenge.
    events: {
      "click td.name" : "showOneChallenge"
    },
    
    showOneChallenge: function() {      
      //var modalView = new ModalView({model: this.model});
      //modalView.show();     
    }
  });
  
  window.ChallengesView = Backbone.View.extend({
    initialize: function() { 
    },
    
    render: function() {  
      this.$el.empty();
      this.collection.each(this.addOne, this);
    },  
    
    addOne: function(model) {
      var challengesRowView = new ChallengesRowView({model: model});
    
      challengesRowView.render();
      this.$el.append(challengesRowView.el);     
    } 
  });
});
