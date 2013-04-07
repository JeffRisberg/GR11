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
      this.show();
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
      var startDate = $("#startDate").val();
      this.model.set({startDate: startDate});
      
      var endDate = $("#endDate").val();
      this.model.set({endDate: endDate});
      
      var description = $("#description").val();
      this.model.set({description: description});
      
      this.model.save();
      this.show();
    }   
  });
  
  /**
   * The ChallengesRowView listens for changes to its model, re-rendering.
   */
  ChallengesRowView = Backbone.View.extend({
    tagName: "tr",
    
    initialize: function() {
      this.model.bind('change', this.render, this);
      //this.modelData = this.model.attributes;
    },
    
    // Cache the template function for a single item.
    template: _.template($('#challengesRow-template').html()),
    
    // Re-render the contents of the challenge
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
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
      this.base = $('#challenges-panel');
      this.tbody = $('#challenges-tbody');
    },
    
    update: function() {   
      this.tbody.empty();
     
      var self=this;
      this.collection.each(function(i) {           
        var challengesRowView = new ChallengesRowView({model: i});  
        challengesRowView.render()
        self.tbody.append(challengesRowView.el);       
      });
    },

    events: {
    },
    
    addOne: function(model) {
      var challengesRowView = new ChallengesRowView({model: model});
    
      challengesRowView.render();
      this.$el.append(challengesRowView.el);     
    } 
  });
});
