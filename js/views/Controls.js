App.Views.Controls = Backbone.View.extend({
    el: '#controls', // okay since we're not nesting
    template: _.template($('#filter').html()),
    events: {
        'click button': 'clearTodos',
        'change select': 'selectFilter',
    },
    clearTodos: function() {
        this.collection.clearCompleted();
    },
    selectFilter: function(e) {
        this.collection.updateFilter(e.target.value);
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})