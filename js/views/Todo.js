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
        console.log('toggleComplete firing from inside view')
        this.model.toggleComplete(); // fires from inside model when user interacts with view
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});