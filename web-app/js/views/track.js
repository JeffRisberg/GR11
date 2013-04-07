/**
 * Contains TrackView
 */
 
 $(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  // Add behavior to the Track screen
  window.TrackView = Backbone.View.extend({
    initialize: function() {
     // nothing to right now
    },
    
    el: $("#track-panel"),
    
    events: {
      "click #save": "saveTrack",
    },
      
    saveTrack: function() {
     var buildingId = $("#buildingId").val();
     var classId = $("#classId").val();
    
     //create a throw-away Backbone.Model instance with the correct URL and ID and then call 'destroy' on it
     var m = new Backbone.Model();
     m.urlRoot = "/GR11/trackAPI/save";
     //m.id = 1234;
     m.set("buildingId", buildingId);
     m.set("classId", classId);
     m.save();    
    }
      
  });
});

