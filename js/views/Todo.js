App.Views.Todo = Backbone.View.extend({ // currently doing shit all
    el: '#todo-list',
    initialize: function() {
        // Event listeners
        // this.listenTo(this.model, 'add', console.log('model changed'));
    },
    render: function() {
        this.$el.html(
            '<li class="list-group-item">' + 
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Test</label>' + // Needs to be dynamic
            '</li>'
        );
    }
});