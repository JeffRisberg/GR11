/**
 * Contains ActivitiesView and ActivitiesRowView
 */

$(function() {
	ActivitiesRowView = Backbone.View.extend({
		// The ActivitiesRowView listens for changes to its model, re-rendering.
		initialize : function() {
			// this.model.bind('change', this.render, this);//bind th event to model
			// this.model.bind('destroy', this.remove, this);
			this.modelData = this.model.toJSON();
		},
		tagName : "tr",
		// Cache the template function for a single item.
		template : _.template($('#activitiesRow-template').html()),
		// Re-render the contents of the activity
		render : function() {
			this.$el.append(this.template(this.modelData));// change to html in future
			return this;
		},

		// The DOM events specific to a activity.
		events : {
			// "dblclick div.activity-message" : "edit",
			// "click span.activity-destroy" : "clear",
			// "keypress .activity-input" : "updateOnEnter"
			"click td" : "viewOneActivity"
		},
		viewOneActivity : function() {
			alert(this.modelData.name);
		}
	});

	ActivitiesView = Backbone.View.extend({

		initialize : function() {
			 this.base = $('#activity-tbody');
		},
		tagName : "tbody",
		// will be passed in through calling constructor
		render : function() {
			var self = this;
			this.collection.each(function(i) {
				var activitiesRowView = new ActivitiesRowView({
					model : i
				});
				self.$el.append(activitiesRowView.render().$el); 
			});
			return this;
		},

	//could get rid of this function in future if use render
	 /*updateFrom: function(collection) { 
		 this.base.empty();
	  
		 var self=this; 
		 collection.each(function(i) {
			 var activitiesRowView = new ActivitiesRowView({model: i}); 
			 self.base.append(activitiesRowView.render().$el); 
		 });
	  }*/
	});
});
