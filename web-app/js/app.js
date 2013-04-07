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
                                         
      this.homeView = new HomeView();    
      this.trackView = new TrackView();       
     
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
      "click #track_button":      "showTrack"
    },
   
    render: function() {   
      // everything is already rendered, this view is present just to attach event handlers 
      return this;  
    },
 
    showHome: function() {
      $(".panel").hide();  
      $("#home-panel").toggle();  
      $("#menu a").removeClass("active");
      $("#home_button").toggleClass("active");      
      
      this.homeView.update();
    },
    
    showTrack: function() {
      $(".panel").hide();  
      $("#track-panel").toggle();          
      $("#menu a").removeClass("active");
      $("#track_button").toggleClass("active"); 
    },
  });
  
  // Finally, we kick things off by creating the **App**.
  window.App = new AppView;  
});
