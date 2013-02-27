/**
 * Contains ActivitiesView and ActivitiesRowView
 */
 
 $(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  window.ActivitiesRowView = Backbone.View.extend({
    
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $('#activity-table'),
    
    // Cache the template function for a single item.
    template: _.template($('#activitiesRow-template').html()),

    // The DOM events specific to a activity.
    events: {     
      //"dblclick div.activity-message" : "edit",
      //"click span.activity-destroy"   : "clear",
      //"keypress .activity-input"      : "updateOnEnter",
      "click td a" :  "viewOneActivity"
    },

    viewOneActivity : function() {
      alert("View");
    },
    
    // The ActivitiesRowView listens for changes to its model, re-rendering.
    initialize: function() {
      //this.model.bind('change', this.render, this);
      //this.model.bind('destroy', this.remove, this);
    },

    // Re-render the contents of the activity
    render: function() {               
      $(this.el).append(this.template(this.model.toJSON()));
      console.log(this.model.toJSON());      
      return this;
    }

  });
  
  window.ActivitiesView = Backbone.View.extend({
  
    initialize: function() {
      this.base = $('#activity-table');  
    },
    
    render: function() {  
      var self=this;
      return self.el;
    },  
  
    updateFrom: function(collection) {  
      this.base.empty();
         
      var self=this;
      collection.each(function(i) {         
        var activitiesRowView = new ActivitiesRowView({model: i});       
        self.base.append(activitiesRowView.render());              
      });      
    }   
  });
});

