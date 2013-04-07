/**
 * The ActivityEdit view...
 * The ActivitiesView is the view for the Activity Panel.
 * The ActivitiesRowView is the inner view for a row on the Panel.
 *
 * The ChallengeEditView ...
 * The ChallengesView is the view for the Challenge Panel
 * The ChallengesRowView is the inner view for a row on the Panel.
 *
 * The AdminAppView is the container-level view.
 */

$(function() {
  
  window.AdminAppView = Backbone.View.extend({

    initialize: function() {          
      //alert("begin AdminAppView init");
      
      this.activities = new Activities();
      this.challenges = new Challenges();
            
      this.activities.fetch();
      this.challenges.fetch();
          
      this.activitiesView = new ActivitiesView(
        {el: $('#activities-tbody'), collection: this.activities});     
      this.challengesView = new ChallengesView(
        {el: $('#challenges-tbody'), collection: this.challenges});
      
      this.showActivities(); 
      
      _.templateSettings = {//this goes to global, here is global is the window obj. 
    	      interpolate : /\{\{(.+?)\}\}/g,
    	      evaluate : /\{!(.+?)!\}/g
    	  };    	  
       
      //alert("end AdminAppView init");
    },
  
    // Instead of generating a new element, bind to the existing skeleton of
    // the app already present in the HTML.
    el: $("#adminHeader"),
    events: {    
      "click #activities_button": "showActivities",
      "click #challenges_button": "showChallenges",       
    },
   
    render: function() {   
      // everything is already rendered, this view is present just to attach event handlers 
      return this;  
    },
 
    showActivities: function() {        
      $(".panel").hide();    
      $("#activities-panel").toggle();     
      $("#menu a").removeClass("active");
      $("#activities_button").toggleClass("active");
      
      this.activitiesView.update();     
    },
    
    showChallenges: function() {    
      $(".panel").hide();  
      $("#challenges-panel").toggle();
      $("#menu a").removeClass("active");
      $("#challenges_button").toggleClass("active"); 
      
      this.challengesView.update(); 
    },
  });
  
  // Finally, we kick things off by creating the **App**.
  window.App = new AdminAppView;  
});
