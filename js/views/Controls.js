App.Views.Controls = Backbone.View.extend({
    el: '#controls',
    template: _.template($('#filter').html()),
    events: {
        'click button': 'clearTodos',
        'change select': 'selectFilter',
    },
    // ALL EVENTS FIRE SAME # OF TIMES AS THERE ARE MODELS because of reusing renderTodo
    clearTodos: function() {
        // this.model.clearTodos();
    },
    selectFilter: function(e) {
        console.log(e.target.value);
    },
    render: function() {
        this.$el.html(this.template());
    }
})