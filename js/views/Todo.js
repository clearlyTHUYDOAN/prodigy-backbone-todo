const TodoView = Backbone.View.extend({
    el: '#todo-list',
    // events: {

    // },
    initialize: function() {
        // Event listeners

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