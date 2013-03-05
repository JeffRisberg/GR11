/**
 * Contains ActivitiesView and ActivitiesRowView
 */

$(function() {
	ActivitiesRowView = Backbone.View.extend({
		// The ActivitiesRowView listens for changes to its model, re-rendering.
		initialize : function() {
			this.model.bind('change', this.render, this);
			//this.model.bind('destroy', this.remove, this);
			this.modelData = this.model.attributes;
		},
		tagName : "tr",
		// Cache the template function for a single item.
		template : _.template($('#activitiesRow-template').html()),
		// Re-render the contents of the activity
		render : function() {
			var html=this.template({name:this.modelData.name, description:this.modelData.description});		
			this.$el.html(html);
		},

		// The DOM events specific to a activity.
		events : {
			"click td.name" : "viewOneActivity"
		},
		viewOneActivity : function() {
			//alert(this.modelData.name);
			var modalView=new ModalView({model:this.model});
			modalView.view();
			
		}
	});

	ActivitiesView = Backbone.View.extend({

		initialize : function() {
		},
		tagName : "tbody",
		// will be passed in through calling constructor
		render : function() {
			this.collection.each(this.addOne,this);
		},

		addOne:function(model){
			var activityRowView=new ActivitiesRowView({model:model});
		
			//$(document.body).append(modalView);
			activityRowView.render();
			this.$el.append(activityRowView.el); 
			
		}
	});
	
	
	ModalView=Backbone.View.extend({
		initialize:function(){
			$(document.body).append(this.$el);
			this.model.on("change", this.view,this );//upon model chagnge, rerender view;
		},
		events:{
			'click #close':'close',
			'click #edit':'edit',
			'click #save':'save',
		},
		//template:_.template($("#activityViewModal-template").html()),//to be passed in;
		view:function(){
			var template=_.template($("#activityViewModal-template").html());
			var html=template(this.model.attributes);
			this.$el.html(html);
			
		},
		close:function(){
			this.remove();
		},
		edit:function(){
			var template=_.template($("#activityEditModal-template").html());
			var html=template(this.model.attributes);
			this.$el.html(html);
		},
		save:function(){
			var description=$("#description").val();
			this.model.set({description:description});
			this.model.save();
		}
		
	});
	

	
	
	
	
});
