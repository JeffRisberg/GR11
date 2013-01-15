$(function(){

  window.Challenges = new ChallengeList;
  window.Activities = new ActivityList;

  window.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the app already present in the HTML.
    el: $("#app"),
    events: {
      "click #show-activities": "toggleActivities",
      "click #show-challenges": "toggleChallenges",      
    },

    // At initialization we bind to the relevant events on the Challenges and 
    // Activities collections, when items are added or changed.
    initialize: function() {
      
      Challenges.bind('add',   this.addChallenge, this);
      Challenges.bind('reset', this.addAllChallenges, this);
      Challenges.bind('all',   this.render, this);
          
      Activities.bind('add',   this.addActivities, this);
      Activities.bind('reset', this.addAllActivities, this);
      Activities.bind('all',   this.render, this);
          
      Challenges.fetch();
      Activities.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      //this.$('#todo-stats').html(this.statsTemplate({
      //  total:      Challenges.length,
      //  done:       Challenges.done().length,
      //  remaining:  Challenges.remaining().length
      //}));
      
      //$('#activities-list').empty();
      
      //Activities.each(this.addActivity);
    },
 
    toggleActivities: function() {
      $("#activity-list").toggle();
      $("#show-activities").toggleClass("active");
    },
    
    toggleChallenges: function() {         
      $("#challenge-list").toggle();
      $("#show-challenges").toggleClass("active");
    },
    
    // Add a single activity to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addActivity: function(activity) {     
      var view = new ActivityView({model: activity});
      $("#activity-list").append(view.render().el);
    },
    
    // Add all items in the **Activity** collection at once.
    addAllActivities: function() {      
      Activities.each(this.addActivity);
    },
    
    // Add a single challenge to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addChallenge: function(challenge) {        
      var view = new ChallengeView({model: challenge});
      $("#challenge-list").append(view.render().el);
    },

    // Add all items in the **Challenge** collection at once.
    addAllChallenges: function() {    
      Challenges.each(this.addChallenge);
    },

    // If you hit return in the main input field, and there is a message to save,
    // create new **Challenge** model persisting it to *localStorage*.
    createOnEnter: function(e) {
      var message = this.input.val();
      if (!message || e.keyCode != 13) return;
      Challenges.create({message: message});
      this.input.val('');
    },

    // Lazily show the tooltip that tells you to press `enter` to save
    // a new challege, after one second.
    showTooltip: function(e) {
      var tooltip = this.$(".ui-tooltip-top");
      var val = this.input.val();
      tooltip.fadeOut();
      if (this.tooltipTimeout) clearTimeout(this.tooltipTimeout);
      if (val == '' || val == this.input.attr('placeholder')) return;
      var show = function(){ tooltip.show().fadeIn(); };
      this.tooltipTimeout = _.delay(show, 1000);
    }
  });
  
  // Finally, we kick things off by creating the **App**.
  window.App = new AppView;
});
