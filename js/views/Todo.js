App.Views.Todo = Backbone.View.extend({
    el: '#todo-list',
    template: _.template($('#todo-item').html()),
    events: {
        'change input': 'toggleComplete'
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render); // don't pass the call
    },
    toggleComplete: function() {
        this.model.toggleComplete(); // fires from inside model when user interacts with view
    },
    render: function() {
        console.log(this.model.attributes)
        this.$el.append(this.template(this.model.attributes)); // when clearing, title doesn't get passed b/c this.model.attributes is undefined
        // return this; // what's this for
    }
});