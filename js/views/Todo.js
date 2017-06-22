App.Views.Todo = Backbone.View.extend({
    template: _.template($('#todo-item').html()),
    events: {
        'change input': 'toggleComplete'
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    toggleComplete: function() {
        this.model.toggleComplete();
    },
    render: function() {
        console.log('todo view render is firing');
        this.$el.html(this.template(this.model.attributes)); // when clearing, title doesn't get passed b/c this.model.attributes is undefined
        return this;
    }
});

// append will not delete the old node and will just add new nodes
// html will replace dat node