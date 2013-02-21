/**
 * The ActivitiesView is the view for the activity Panel.
 * The ActivitiesRowView is the inner view for a row on the Panel.
 *
 * The ChallengesView is the view for the challenge Panel
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
                
      this.activitiesView = new ActivitiesView();    
      this.challengesView = new ChallengesView();
           
      this.showActivities(); 
       
      //alert("end AppView init");
    },
  
    // Instead of generating a new element, bind to the existing skeleton of
    // the app already present in the HTML.
    el: $("#app"),
    events: {
      "click #activities_button": "showActivities",
      "click #challenges_button": "showChallenges"  
    },
   
    render: function() {      
      // not sure what is needed here
    },
 
    showActivities: function() {
      $("#activities").show();
      $("#challenges").hide();
      $("#activities_button").addClass("active");
      $("#challenges_button").removeClass("active");
    },
    
    showChallenges: function() {  
      $("#activities").hide();
      $("#challenges").show();
      $("#activities_button").removeClass("active");
      $("#challenges_button").addClass("active");
    },
  });
  
  // Finally, we kick things off by creating the **App**.
  window.App = new AppView;
  
});
