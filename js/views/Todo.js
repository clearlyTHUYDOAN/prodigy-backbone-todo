const TodoView = Backbone.View.extend({
    el: '#todo-list',
    initialize: function() {
        console.log('TodoView initialize has fired.');
    },
    render: function() {
        this.$el.html(
            'li class="list-group-item">' + 
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Test</label>' +
            '</li>'
        );
    }
});