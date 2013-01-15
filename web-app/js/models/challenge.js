$(function(){

  window.Challenge = Backbone.Model.extend({
  });
   
  window.ChallengeList = Backbone.Collection.extend({
    model: Challenge,
    url: '/GR11/challengeAPI',
  });
    
  window.ChallengeActivity = Backbone.Model.extend({
  });
  
  window.ChallengeTeam = Backbone.Model.extend({
  });

});
