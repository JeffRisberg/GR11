/**
 * Contains ChallengesView and ChallengesRowView
 */
 
 $(function() {
  /**
   * Handles show and edit of an challenge
   */
  ChallengeModalView = Backbone.View.extend({
    initialize: function() {
      $(document.body).append(this.$el);
      this.model.on("change", this.show, this); //upon model change, rerender view;
    },
    events: {
      'click #close' : 'close',
      'click #edit'  : 'edit',
      'click #save'  : 'save',
    },
    show: function() {
      var template = _.template($("#challengeShowModal-template").html());
      var html = template(this.model.attributes);
      this.$el.html(html);
    },
    close: function() {
      this.remove();
    },
    edit: function() {
      var template = _.template($("#challengeEditModal-template").html());
      var html = template(this.model.attributes);
      this.$el.html(html);
    },
    save: function() {
      var description = $("#description").val();
      this.model.set({description:description});
      this.model.save();
    }   
  });
  
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
      var modalView = new ChallengeModalView({model: this.model});
      modalView.show();     
    }
  });
  
  ChallengesView = Backbone.View.extend({
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
