$(function(){

  window.Activity = Backbone.Model.extend({
  });
    
  window.Activities = Backbone.Collection.extend({
    model: Activity,
    url: '/GR11/activityAPI',
  });

});  