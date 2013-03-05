/**
 * The HomeView is the view for the Home Panel.
 *
 * The TrackView is the view for the Track Panel.
 *
 * The ActivitiesView is the view for the Activity Panel.
 * The ActivitiesRowView is the inner view for a row on the Panel.
 *
 * The ChallengesView is the view for the Challenge Panel
 * The ChallengesRowView is the inner view for a row on the Panel.
 *
 * The AppView is the container-level view.
 */

$(function(){
  
  window.AppView = Backbone.View.extend({

    initialize: function() {          
      //alert("begin AppView init");
      
      this.activities = new Activities();
      this.challenges = new Challenges();
            
      this.activities.fetch();
      this.challenges.fetch();
          
      this.homeView = new HomeView();  
      this.trackView = new TrackView();  
      
     
      this.challengesView = new ChallengesView();
           
      this.showHome(); 
      
      _.templateSettings = {//this goes to global, here is global is the window obj. 
    	      interpolate : /\{\{(.+?)\}\}/g,
    	      evaluate : /\{!(.+?)!\}/g
    	  };
    	  
       
      //alert("end AppView init");
    },
  
    // Instead of generating a new element, bind to the existing skeleton of
    // the app already present in the HTML.
    el: $("#header"),
    events: {
      "click #home_button":       "showHome",
      "click #track_button":      "showTrack",
      "click #activities_button": "showActivities",
      "click #challenges_button": "showChallenges"  
    },
   
    render: function() {   
      // everything is already rendered, this view is present just to attach event handlers 
      return this;  
    },
 
    showHome: function() {
      $(".panel").hide();  
      $("#home_panel").show();  
      $("#menu a").removeClass("active");
      $("#home_button").addClass("active");      
    },
    
    showTrack: function() {
      $(".panel").hide();  
      $("#track_panel").show();          
      $("#menu a").removeClass("active");
      $("#track_button").addClass("active"); 
    },
    
    showActivities: function() {
    
      $(".panel").hide();    
      $("#activities_panel").show();     
      $("#menu a").removeClass("active");
      $("#activities_button").addClass("active");
      
      activitiesView = new ActivitiesView({collection:this.activities}); 
      activitiesView.render();
      $('#activity-tbody').html(activitiesView.el);
     // self.activitiesView.updateFrom(self.activities);
    },
    
    showChallenges: function() {
      var self=this;
     
      $(".panel").hide();  
      $("#challenges_panel").show();
      $("#menu a").removeClass("active");
      $("#challenges_button").addClass("active"); 
      
      self.challengesView.updateFrom(self.challenges);
    },
  });
  
  // Finally, we kick things off by creating the **App**.
  window.App = new AppView;
  
});
