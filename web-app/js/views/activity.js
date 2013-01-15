$(function(){

  // this sets up the marker strings needed for interpolating {{ }} and evaluation {! !}
  _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g,
      evaluate : /\{!(.+?)!\}/g
  };
  
  window.ActivityView = Backbone.View.extend({

    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#activity-template').html()),

    // The DOM events specific to a activity.
    events: {     
      "dblclick div.activity-message" : "edit",
      "click span.activity-destroy"   : "clear",
      "keypress .activity-input"      : "updateOnEnter"
    },

    // The ActivityView listens for changes to its model, re-rendering.
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    // Re-render the contents of the activity
    render: function() {               
      $(this.el).html(this.template(this.model.toJSON()));
      //this.setName();
      return this;
    },

    // To avoid XSS (not that it would be harmful in this particular app),
    // we use `jQuery.text` to set the contents of the activity item.
    setName: function() {
      var name = this.model.get('name');
      this.$('.activity-name').text(name);     
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      $(this.el).addClass("editing");
      this.input.focus();
    },

    // Close the `"editing"` mode, saving changes to the activity.
    close: function() {
      this.model.save({message: this.input.val()});
      $(this.el).removeClass("editing");
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove this view from the DOM.
    remove: function() {
      $(this.el).remove();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }
  });
  
});