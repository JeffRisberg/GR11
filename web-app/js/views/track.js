/**
 * Contains TrackView
 */
 
 $(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  window.TrackView = Backbone.View.extend({
    // attach
  });
});

