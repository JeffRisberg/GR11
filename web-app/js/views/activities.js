/**
 * Contains ActivitiesView and ActivitiesRowView
 */

$(function() {
  /**
   * handles show and edit of an activity
   */
	ActivityModalView = Backbone.View.extend({
		initialize: function() {
			$(document.body).append(this.$el);
			this.model.on("change", this.show, this); //upon model change, rerender view;
		},
		events: {
			'click #close' : 'close',
			'click #edit'  : 'edit',
			'click #save'  : 'save',
		},
		show: function() {
			var template = _.template($("#activityShowModal-template").html());
			var html = template(this.model.attributes);
			this.$el.html(html);
		},
		close: function() {
			this.remove();
		},
		edit: function() {
			var template = _.template($("#activityEditModal-template").html());
			var html = template(this.model.attributes);
			this.$el.html(html);
		},
		save: function() {
			var description = $("#description").val();
			this.model.set({description:description});
			this.model.save();
		}		
	});
	
	/**
   * The ActivitiesRowView listens for changes to its model, re-rendering.
   */
  ActivitiesRowView = Backbone.View.extend({
    tagName: "tr",
    
    initialize: function() {
      this.model.bind('change', this.render, this);
      //this.modelData = this.model.attributes;
    },
    
    // Cache the template function for a single item.
    template: _.template($('#activitiesRow-template').html()),
    
    // Re-render the contents of the activity
    render: function() {
      var html = this.template({name: this.model.get('name'), description: this.model.get('description')});   
      this.$el.html(html);
    },

    // The DOM events specific to an activity.
    events: {
      "click td.name" : "showOneActivity"
    },
    
    showOneActivity: function() {      
      var modalView = new ActivityModalView({model: this.model});
      modalView.show();     
    }
  });
  
	ActivitiesView = Backbone.View.extend({
    initialize: function() {
    },
    
    render: function() {  
      this.$el.empty();
      this.collection.each(this.addOne, this);
    },

    addOne: function(model) {
      var activitiesRowView = new ActivitiesRowView({model: model});
    
      activitiesRowView.render();
      this.$el.append(activitiesRowView.el);      
    }
  });
});
