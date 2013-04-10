/**
 * Contains HomeView
 */
 
 $(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  HomeChallengesView = Backbone.View.extend({
     initialize: function() {
      this.base = $('#homeChallenges-panel');
      this.tbody = $('#homeChallenges-tbody');
    },
    
    update: function() {   
      this.tbody.empty();
     
      var self=this;
      //this.collection.each(function(i) {           
      //  var challengesRowView = new HomeChallengesRowView({model: i});  
      //  challengesRowView.render()
      //  self.tbody.append(challengesRowView.el);       
      //});
    },

    events: {
    },   
  });
  
  HomeActivitiesView = Backbone.View.extend({
    initialize: function() {
      this.base = $('#homeActivities-panel');
      this.tbody = $('#homeActivities-tbody');
    },
    
    update: function() {   
      this.tbody.empty();

      // fetch here
      
      var self=this;
      //this.collection.each(function(i) {             
      //  var activitiesRowView = new HomeActivitiesRowView({model: i});  
      //  activitiesRowView.render();
      //  self.tbody.append(activitiesRowView.el);     
      //});
    },

    events: {
    },    
  });
  
  window.HomeView = Backbone.View.extend({
    initialize: function() {
    
      this.challengesView = new HomeChallengesView();
      this.activitiesView = new HomeActivitiesView();      
    },
        
    update: function() {     
      this.challengesView.update();
      this.activitiesView.update();
    }
    
  });
});

