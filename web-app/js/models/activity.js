$(function(){

  window.Activity = Backbone.Model.extend({
  });
    
  window.ActivityList = Backbone.Collection.extend({
    model: Activity,
    url: '/GR11/activityAPI',
  });

});  