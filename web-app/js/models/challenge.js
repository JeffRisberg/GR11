$(function(){

  window.Challenge = Backbone.Model.extend({
  });
   
  window.Challenges = Backbone.Collection.extend({
    model: Challenge,
    url: '/GR11/challengeAPI',
  });

});
