App.Views.Controls = Backbone.View.extend({
    el: '#controls',
    template: _.template($('#filter').html()),
    events: {
        'click button': 'clearTodos'
    },
    clearTodos: function() {
        // console.log(this.model); // have to refactor so it has access to todo model?
        this.model.clearTodos();
    },
    render: function() {
        this.$el.html(this.template()); // find template by an identifier and stick into el
    }
})